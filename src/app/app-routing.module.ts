import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceBrowseComponent } from './race-browse/race-browse.component'

const routes: Routes = [
  {
    path: '',
    component: RaceBrowseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
