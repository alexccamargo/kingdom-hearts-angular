import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';

import { BirthBySleepComponent } from './birth-by-sleep.component';
import { CommandCardComponent } from './command-card/command-card.component';


@NgModule({
  declarations: [
    BirthBySleepComponent,
    CommandCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    BirthBySleepComponent
  ]
})
export class BirthBySleepModule { }
