import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';

import { BirthBySleepComponent } from './birth-by-sleep.component';
import { CommandCardsComponent } from './command-cards/command-cards.component';
import { CommandCardMobileComponent } from './command-cards/command-card-mobile/command-card-mobile.component';
import { CommandCardRowComponent } from './command-cards/command-card-row/command-card-row.component';


@NgModule({
  declarations: [
    BirthBySleepComponent,
    CommandCardsComponent,
    CommandCardMobileComponent,
    CommandCardRowComponent
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
