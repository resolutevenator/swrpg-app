import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { RacesComponent } from './races/races.component';
import { SpecComponent } from './spec/spec.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthTestComponent } from './auth-test/auth-test.component';
import { AuthGuard } from './services/auth.guard';
import { RaceListComponent } from './race-list/race-list.component';
import { SpecListComponent } from './spec-list/spec-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthTestComponent
  },
  {
    path: 'browse/races',
    component: RaceListComponent
  },
  {
    path: 'browse/specs',
    component: SpecListComponent,
  },
  {
    path: 'races/:raceName',
    component: RacesComponent,
  },
  {
    path: 'specs/:specName',
    component: SpecComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
