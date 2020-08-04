import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';

import { MatSelectChange } from '@angular/material/select';

import { AppData, Command } from '../data';
import { CommandType } from '../models/birth-by-sleep';
import { IData } from '../models/shared';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-birth-by-sleep',
  templateUrl: './birth-by-sleep.component.html',
  styleUrls: ['./birth-by-sleep.component.scss']
})
export class BirthBySleepComponent implements OnInit {

  effectsFilter: string[];
  commandFilter: string[];

  commands: CommandType[];
  filteredCommands: CommandType[];
  selectedCommand: string = null;
  selectedCharacter: string = null;
  selectedEffect: string = null;
  orderBy: string = null;
  favorite = false;
  favoriteCommandStorageKey = 'fav-com';

  constructor() { }

  ngOnInit(): void {
    this.commands = AppData.commands.map(x => this.parseCommand(x));
    this.filteredCommands = this.commands;
    this.commandFilter = this.getCommandFilter();
    this.effectsFilter = AppData.effects;
    this.loadFavoriteFromStore();
  }

  loadFavoriteFromStore(): void {
    const favoriteCommandItems = localStorage.getItem(this.favoriteCommandStorageKey);
    if (favoriteCommandItems) {
      const favoriteCommand: string[] = JSON.parse(favoriteCommandItems) || [];

      this.commands.forEach(c => {
        c.favorite = favoriteCommand.includes(c.name);
      });
    }
  }

  saveFavoriteToStore(): void {
    const favorites = this.commands.filter(x => x.favorite).map(x => x.name);
    localStorage.setItem(this.favoriteCommandStorageKey, JSON.stringify(favorites));
  }

  getCommandFilter(): string[] {
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

  parseCommand(command: Command): CommandType {
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

  parseCrystalEffect(crystalEffect): any {
    return crystalEffect.reduce((acc: IData, curr) => {
      acc[curr.crystal] = curr.effect;
      return acc;
    }, {});
  }

  setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
  }

  commandSelected(event: MatSelectChange): void {
    this.selectedCommand = event.value || undefined;
    this.applyFilter();
  }

  characterSelected(event: MatSelectChange): void {
    this.selectedCharacter = event.value || undefined;
    this.applyFilter();
  }

  effectSelected(event: MatSelectChange): void {
    this.selectedEffect = event.value || undefined;
    this.applyFilter();
  }

  favoriteChanged(event: MatSlideToggleChange): void {
    this.favorite = event.checked;
    this.applyFilter();
  }

  orderByChanged(event: MatSelectChange): void {
    this.orderBy = event.value || undefined;
    this.applyFilter();
  }

  commandFavoriteChanged(event: {name: string, favorite: boolean}): void {
    this.commands.find(x => x.name === event.name).favorite = event.favorite;
    this.applyFilter();
    this.saveFavoriteToStore();
  }

  applyFilter(): void {
    if (!this.selectedCharacter && !this.selectedCommand && !this.selectedEffect && !this.favorite && !this.orderBy) {
      this.filteredCommands = this.commands;
      return;
    }

    let filtered: Array<CommandType> = cloneDeep(this.commands);

    if (this.favorite) {
      filtered = filtered.filter(x => x.favorite);
    }

    if (this.selectedCharacter) {
      filtered = filtered.filter(x => x.chars.includes(this.selectedCharacter));
    }

    if (this.selectedCommand || this.selectedEffect) {

      filtered.forEach(
        c => c.melding = c.melding.filter(
          m => (
            (!this.selectedCommand || m.firstItem === this.selectedCommand || m.secondItem === this.selectedCommand) &&
            (!this.selectedEffect || Object.keys(m.crystalEffect).find(k => m.crystalEffect[k] === this.selectedEffect))
          )
        )
      );

      filtered = filtered.filter(x => x.melding && x.melding.length);

      if (this.selectedCommand) {
        const cmd = this.commands.find(x => x.name === this.selectedCommand);
        if (cmd) {
          filtered.unshift(cloneDeep(cmd));
        }
      }
    }

    if (this.orderBy) {
      if (this.orderBy === 'name'){
        filtered = filtered.sort((a, b) => a.name > b.name ? 1 : -1);
      }
    }
    this.filteredCommands = filtered;
  }

}
