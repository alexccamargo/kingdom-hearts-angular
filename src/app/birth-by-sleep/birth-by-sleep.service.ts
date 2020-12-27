import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';

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
    this.commands = AppData.commands.map(x => this.parseCommand(x));
    this.loadFavoriteFromStore();
  }

  getCommands(): CommandType[] {
    return cloneDeep(this.commands);
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

  private parseCommand(command: Command): CommandType {
    return ({
      name: command.name,
      chars: command.chars,
      favorite: false,
      melding: command.melding.map(m => ({
        firstItem: m.firstItem,
        secondItem: m.secondItem,
        percent: m.percent,
        crystalEffect: this.parseCrystalEffect(m.crystalEffect)
      }))
    });
  }

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
