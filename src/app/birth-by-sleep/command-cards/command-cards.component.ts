import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommandType } from '../../models/birth-by-sleep';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'bbs-command-cards',
  templateUrl: './command-cards.component.html',
  styleUrls: ['./command-cards.component.scss']
})
export class CommandCardsComponent implements OnInit {

  @Input() commands: CommandType[];

  @Output() favoriteChanged = new EventEmitter();

  isMobile = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched([Breakpoints.Small, Breakpoints.HandsetPortrait]);

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
      });
  }

  changeFavorite(favData: { name: string, favorite: boolean }): void {
    this.favoriteChanged.emit(favData);
  }
}
