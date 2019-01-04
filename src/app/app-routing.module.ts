import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceBrowseComponent } from './race-browse/race-browse.component'
import { RacesComponent } from './races/races.component';

const routes: Routes = [
  {
    path: '',
    component: RaceBrowseComponent,
    pathMatch: 'full'
  },
  {
    path: 'race/:raceName',
    component: RacesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
