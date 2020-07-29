import { Component } from '@angular/core';
import { AppData, Command } from './data';
import { MatSelectChange } from '@angular/material/select';
import { cloneDeep } from 'lodash';
import { CommandType } from './models/birth-by-sleep';
import { IData } from './models/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // effectsFilter = AppData.effects;
  // commands = AppData.commands.map(x => this.parseCommand(x));
  // filteredCommands = this.commands;

  // selectedCommand: string = null;
  // selectedCharacter: string = null;
  // selectedEffect: string = null;

  // commandFilter = this.getCommandFilter();

  // columndefs: string[] = [
  //   'firstItem',
  //   'secondItem',
  //   'percent',
  //   'Shimmering',
  //   'Fleeting',
  //   'Pulsing',
  //   'Wellspring',
  //   'Soothing',
  //   'Hungry',
  //   'Abounding',
  // ];

  // getCommandFilter(): string[] {
  //   const result = new Set<string>();
  //   AppData.commands.forEach(cmd => {
  //     result.add(cmd.name);
  //     cmd.melding.forEach(m => {
  //       result.add(m.firstItem);
  //       result.add(m.secondItem);
  //     });
  //   });
  //   return Array.of(...result).sort();
  // }

  // parseCommand(command: Command): CommandType {
  //   return ({
  //     name: command.name,
  //     chars: command.chars,
  //     melding: command.melding.map(m => ({
  //       firstItem: m.firstItem,
  //       secondItem: m.secondItem,
  //       percent: m.percent,
  //       crystalEffect: this.parseCrystalEffect(m.crystalEffect)
  //     }))
  //   });
  // }

  // parseCrystalEffect(crystalEffect): any {
  //   return crystalEffect.reduce((acc: IData, curr) => {
  //     acc[curr.crystal] = curr.effect;
  //     return acc;
  //   }, {});
  // }

  // setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  //   obj[key] = value;
  // }

  // getCharacters(chars: string): string {
  //   const result = [];
  //   if (chars.includes('A')) {
  //     result.push('Aqua');
  //   }

  //   if (chars.includes('T')) {
  //     result.push('Terra');
  //   }

  //   if (chars.includes('V')) {
  //     result.push('Ventus');
  //   }

  //   return result.join(' - ');
  // }

  // commandSelected(event: MatSelectChange): void {
  //   this.selectedCommand = event.value;
  //   this.applyFilter();
  // }

  // characterSelected(event: MatSelectChange): void {
  //   this.selectedCharacter = event.value;
  //   this.applyFilter();
  // }

  // effectSelected(event: MatSelectChange): void {
  //   this.selectedEffect = event.value;
  //   this.applyFilter();
  // }

  // applyFilter(): void{
  //   if (!this.selectedCharacter && !this.selectedCommand && !this.selectedEffect) {
  //     this.filteredCommands = this.commands;
  //     return;
  //   }

  //   let filtered: Array<any> = cloneDeep(this.commands);

  //   if (this.selectedCharacter) {
  //     filtered = filtered.filter(x => x.chars.includes(this.selectedCharacter));
  //   }

  //   if (this.selectedCommand || this.selectedEffect) {

  //     filtered.forEach(
  //       c => c.melding = c.melding.filter(
  //         m => (
  //           (!this.selectedCommand || m.firstItem === this.selectedCommand || m.secondItem === this.selectedCommand) &&
  //           (!this.selectedEffect || Object.keys(m.crystalEffect).find(k => m.crystalEffect[k] === this.selectedEffect))
  //         )
  //       )
  //     );

  //     filtered = filtered.filter(x => x.melding && x.melding.length);

  //     if (this.selectedCommand) {
  //       const cmd = this.commands.find(x => x.name === this.selectedCommand);
  //       if (cmd) {
  //         filtered.unshift(cloneDeep(cmd));
  //       }
  //     }
  //   }

  //   this.filteredCommands = filtered;
  // }
}
