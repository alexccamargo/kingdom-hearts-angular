import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommandType } from 'src/app/models/birth-by-sleep';

import { SharedFunctions } from '../shared-functions';

@Component({
  selector: 'bbs-command-card-row',
  templateUrl: './command-card-row.component.html',
  styleUrls: [
    './command-card-row.component.scss',
    '../shared.scss'
  ]
})
export class CommandCardRowComponent implements OnInit {

  @Input() command: CommandType;

  @Output() favoriteChanged = new EventEmitter();

  characters: string;

  columndefs: string[] = [
    'firstItem',
    'secondItem',
    'percent',
    'Shimmering',
    'Fleeting',
    'Pulsing',
    'Wellspring',
    'Soothing',
    'Hungry',
    'Abounding',
  ];

  constructor() { }

  ngOnInit(): void {
    this.characters = SharedFunctions.getCharacters(this.command.chars);
  }

  changeFavorite(): void {
    this.favoriteChanged.emit({ name: this.command.name, favorite: !this.command.favorite });
  }
}
