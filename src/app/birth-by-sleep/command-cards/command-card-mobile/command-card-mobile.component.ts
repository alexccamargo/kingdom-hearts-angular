import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommandType } from 'src/app/models/birth-by-sleep';

@Component({
  selector: 'bbs-command-card-mobile',
  templateUrl: './command-card-mobile.component.html',
  styleUrls: [
    './command-card-mobile.component.scss',
    '../shared.scss'
  ]
})
export class CommandCardMobileComponent implements OnInit {

  @Input() command: CommandType;

  @Output() favoriteChanged = new EventEmitter();

  characters: string;

  constructor() { }

  ngOnInit(): void { }

  changeFavorite(): void {
    this.favoriteChanged.emit({ name: this.command.name, favorite: !this.command.favorite });
  }

  toggleDetails(element): void {
    element.showDetails = !element.showDetails;
  }
}
