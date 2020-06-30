import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// import { GestureConfig } from '@angular/material/';

import { AngularFireModule } from '@angular/fire/';
import { AngularFireDatabaseModule } from '@angular/fire/database/';
import { AngularFireAuthModule } from '@angular/fire/auth/';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import 'hammerjs';

import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RacesComponent } from './races/races.component';
import { SpecComponent } from './spec/spec.component';
import { LoginComponent } from './login/login.component';
import { AuthTestComponent } from './auth-test/auth-test.component';
import { AuthGuard } from './services/auth.guard';
import { RaceListComponent } from './race-list/race-list.component';
import { SpecListComponent } from './spec-list/spec-list.component';
import { SeriesChooserComponent } from './browse/series-chooser/series-chooser.component';
import { CreateComponent } from './create/create.component';
import { CreateRaceComponent } from './create/create-race/create-race.component';
import { CreateSpecComponent } from './create/create-spec/create-spec.component';
import { CreateTalentComponent } from './create/create-talent/create-talent.component';
import { CreateArmorComponent } from './create/create-armor/create-armor.component';
import { CreateWeaponComponent } from './create/create-weapon/create-weapon.component';
import { CreateGearComponent } from './create/create-gear/create-gear.component';
import { CreateVehicleComponent } from './create/create-vehicle/create-vehicle.component';
import { CreateStarshipComponent } from './create/create-starship/create-starship.component';
import { WeaponComponent } from './items/weapon/weapon.component';
import { ArmorComponent } from './items/armor/armor.component';
import { GearComponent } from './items/gear/gear.component';
import { StarshipComponent } from './vehicles/starship/starship.component';
import { VehiclesComponent } from './vehicles/vehicles/vehicles.component';
import { GearAttachmentComponent } from './attachments/gearattachment/gearattachment.component';
import { VehicleAttachmentComponent } from './attachments/vehicleattachment/vehicleattachment.component';
import { CreateCharacterComponent } from './create/create-character/create-character.component';
import { CreateCharacterInfoComponent } from './create/create-character/create-character-info/create-character-info.component';
import { CreateCharacterRaceComponent } from './create/create-character/create-character-race/create-character-race.component';
import { CreateCharacterClassComponent } from './create/create-character/create-character-class/create-character-class.component';
import { CreateCharacterAbilitiesComponent } from './create/create-character/create-character-abilities/create-character-abilities.component';
import { CreateCharacterDescriptionComponent } from './create/create-character/create-character-description/create-character-description.component';
import { ListComponent } from './browse/list/list.component';
import { ListEntryComponent } from './browse/list/list-entry/list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    HeaderComponent,
    NotFoundComponent,
    RacesComponent,
    SpecComponent,
    LoginComponent,
    AuthTestComponent,
    RaceListComponent,
    SpecListComponent,
    SeriesChooserComponent,
    CreateComponent,
    CreateRaceComponent,
    CreateSpecComponent,
    CreateTalentComponent,
    CreateArmorComponent,
    CreateWeaponComponent,
    CreateGearComponent,
    CreateVehicleComponent,
    CreateStarshipComponent,
    WeaponComponent,
    ArmorComponent,
    GearComponent,
    StarshipComponent,
    VehiclesComponent,
    GearAttachmentComponent,
    VehicleAttachmentComponent,
    CreateCharacterComponent,
    CreateCharacterInfoComponent,
    CreateCharacterRaceComponent,
    CreateCharacterClassComponent,
    CreateCharacterAbilitiesComponent,
    CreateCharacterDescriptionComponent,
    ListComponent,
    ListEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    HttpClientModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [
    AngularFirestore,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
