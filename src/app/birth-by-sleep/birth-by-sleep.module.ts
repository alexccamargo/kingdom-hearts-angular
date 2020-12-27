import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';

import { CommandCardsComponent } from './command-cards/command-cards.component';
import { CommandCardMobileComponent } from './command-cards/command-card-mobile/command-card-mobile.component';
import { CommandCardRowComponent } from './command-cards/command-card-row/command-card-row.component';
import { CommandListComponent } from './command-list/command-list.component';
import { CommandDetailComponent } from './command-detail/command-detail.component';


@NgModule({
  declarations: [
    CommandCardsComponent,
    CommandCardMobileComponent,
    CommandCardRowComponent,
    CommandListComponent,
    CommandDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CommandListComponent,
  ]
})
export class BirthBySleepModule { }
