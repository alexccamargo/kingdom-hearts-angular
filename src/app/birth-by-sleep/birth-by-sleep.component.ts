import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';

import { MatSelectChange } from '@angular/material/select';

import { CommandType } from '../models/birth-by-sleep';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BirthBySleepService } from './birth-by-sleep.service';

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

  constructor(private service: BirthBySleepService) { }

  ngOnInit(): void {
    this.commands = this.service.getCommands();
    this.filteredCommands = this.commands;
    this.commandFilter = this.service.getAllCommandNames();
    this.effectsFilter = this.service.getEffects();
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

  commandFavoriteChanged(event: { name: string, favorite: boolean }): void {
    this.service.changeFavorite(event.name, event.favorite);
    this.commands = this.service.getCommands();
    this.applyFilter();
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
      if (this.orderBy === 'name') {
        filtered = filtered.sort((a, b) => a.name > b.name ? 1 : -1);
      }
    }
    this.filteredCommands = filtered;
  }

}
