import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandDetailComponent } from './birth-by-sleep/command-detail/command-detail.component';
import { CommandListComponent } from './birth-by-sleep/command-list/command-list.component';

const routes: Routes = [
  {
    path: 'bbs',
    component: CommandListComponent,
  },
  {
    path: 'bbs/:id',
    component: CommandDetailComponent,
  },
  {
    path: '**', redirectTo: 'bbs', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
