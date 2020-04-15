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
import { CreateComponent } from './create/create.component';
import { WeaponComponent } from './items/weapon/weapon.component';
import { ArmorComponent } from './items/armor/armor.component';
import { GearComponent } from './items/gear/gear.component';
import { GearAttachmentComponent } from './attachments/gearattachment/gearattachment.component';
import { VehicleAttachmentComponent } from './attachments/vehicleattachment/vehicleattachment.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'create/:type',
    component: CreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
    path: 'weapon/:weapon',
    component: WeaponComponent
  },
  {
    path: 'armor/:armor',
    component: ArmorComponent
  },
  {
    path: 'gear/:gear',
    component: GearComponent
  },
  {
    path: 'gearAttachments/:gearAttachment',
    component: GearAttachmentComponent
  },
  {
    path: 'vehicleAttachments/:vehicleAttachment',
    component: VehicleAttachmentComponent
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
