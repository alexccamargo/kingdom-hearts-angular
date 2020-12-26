import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthBySleepComponent } from './birth-by-sleep/birth-by-sleep.component';

const routes: Routes = [
  {
    path: 'bbs',
    component: BirthBySleepComponent,
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
