import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Command } from 'src/app/data';
import { CommandType } from 'src/app/models/birth-by-sleep';
import { BirthBySleepService } from '../birth-by-sleep.service';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.scss']
})
export class CommandDetailComponent implements OnInit {

  commandId: string;
  command: CommandType;
  isMobile = false;
  paramsSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, public breakpointObserver: BreakpointObserver, private service: BirthBySleepService) { }

  ngOnInit(): void {

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.commandId = params['id'];
      this.command = this.service.getCommand(this.commandId);
    });

    this.isMobile = this.breakpointObserver.isMatched([Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait]);

    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
      });
  }

  backToCommandList() {
    this.router.navigate(['/bbs']);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  commandFavoriteChanged(event: { name: string, favorite: boolean }): void {
    this.service.changeFavorite(event.name, event.favorite);
    this.command = this.service.getCommand(this.commandId);
  }

}
