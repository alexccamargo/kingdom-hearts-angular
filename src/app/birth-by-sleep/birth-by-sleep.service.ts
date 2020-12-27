import { Injectable } from '@angular/core';
import { cloneDeep, uniq } from 'lodash-es';

import { AppData, Command } from '../data';
import { CommandType } from '../models/birth-by-sleep';
import { IData } from '../models/shared';

@Injectable({
  providedIn: 'root'
})
export class BirthBySleepService {

  private commands: CommandType[];
  private favoriteCommandStorageKey = 'fav-com';

  constructor() {
    this.commands = this.processCommands(AppData.commands);
    this.loadFavoriteFromStore();
  }

  getCommands(): CommandType[] {
    return cloneDeep(this.commands);
  }

  getCommand(id: string): CommandType {
    return this.commands.find(c => c.id === id);
  }

  getEffects(): string[] {
    return cloneDeep(AppData.effects);
  }

  getAllCommandNames(): string[] {
    const result = new Set<string>();
    AppData.commands.forEach(cmd => {
      result.add(cmd.name);
      cmd.melding.forEach(m => {
        result.add(m.firstItem);
        result.add(m.secondItem);
      });
    });
    return Array.of(...result).sort();
  }

  changeFavorite(commandId: string, favorite: boolean): void {
    this.commands = this.commands.map(x => x.name === commandId ? { ...x, favorite } : { ...x });
    this.saveFavoriteToStore();
  }

  private processCommands(commands: Command[]): CommandType[] {
    const ingredientsMap = this.getIngredientMaps(commands);
    const result = AppData.commands.map(x => this.parseCommand(x, ingredientsMap));
    for(const key of ingredientsMap.keys()) {
      if(!result.find(r => r.name === key)) {
        result.push({
          id: this.formatId(key),
          name: key,
          chars: 'TVA',
          favorite: false,
          melding: null,
          ingredientFor: [...ingredientsMap.get(key)].map(this.getCommandTypeId)
        })
      }
    }
    return result.sort((a, b) => a.name > b.name? 1 : -1);
  }
  private formatId(name: string): string {
    return name.toLowerCase().replace(' ', '-');
  }

  private getIngredientMaps(commands: Command[]) {
    return commands
      .flatMap(c => c.melding.flatMap(m => [{ key: m.firstItem, value: c.name}, {key: m.secondItem, value: c.name}]))
      .reduce((aggr, curr) => {
        aggr.has(curr.key) ? aggr.get(curr.key).add(curr.value) : aggr.set(curr.key, new Set([curr.value]));
        return aggr;
      },
    new Map<string, Set<string>>());
  }

  private parseCommand(command: Command, ingredientsMap: Map<string, Set<string>>): CommandType {
    return ({
      id: this.formatId(command.name),
      name: command.name,
      chars: command.chars,
      favorite: false,
      melding: command.melding.map(m => ({
        firstItem: this.getCommandTypeId(m.firstItem),
        secondItem: this.getCommandTypeId(m.secondItem),
        percent: m.percent,
        crystalEffect: this.parseCrystalEffect(m.crystalEffect)
      })),
      ingredientFor: ingredientsMap.has(command.name) ? [...ingredientsMap.get(command.name)].map(this.getCommandTypeId) : []
    });
  }

  getCommandTypeId = (commandName) => ({ id: this.formatId(commandName), name: commandName});

  private parseCrystalEffect(crystalEffect): any {
    return crystalEffect.reduce((acc: IData, curr) => {
      acc[curr.crystal] = curr.effect;
      return acc;
    }, {});
  }

  private loadFavoriteFromStore(): void {
    const favoriteCommandItems = localStorage.getItem(this.favoriteCommandStorageKey);
    if (favoriteCommandItems) {
      const favoriteCommand: string[] = JSON.parse(favoriteCommandItems) || [];

      this.commands.forEach(c => {
        c.favorite = favoriteCommand.includes(c.name);
      });
    }
  }

  private saveFavoriteToStore(): void {
    const favorites = this.commands.filter(x => x.favorite).map(x => x.name);
    localStorage.setItem(this.favoriteCommandStorageKey, JSON.stringify(favorites));
  }

}
