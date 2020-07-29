import { Component, OnInit, Input } from '@angular/core';
import { CommandType } from '../../models/birth-by-sleep';

@Component({
  selector: 'bbs-command-card',
  templateUrl: './command-card.component.html',
  styleUrls: ['./command-card.component.scss']
})
export class CommandCardComponent implements OnInit {

  @Input()
  command: CommandType;

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
  }

  getCharacters(chars: string): string {
    const result = [];
    if (chars.includes('A')) {
      result.push('Aqua');
    }

    if (chars.includes('T')) {
      result.push('Terra');
    }

    if (chars.includes('V')) {
      result.push('Ventus');
    }

    return result.join(' - ');
  }
}
