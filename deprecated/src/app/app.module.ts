import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';

import { AngularFireModule } from '@angular/fire/';
import { AngularFireDatabaseModule } from '@angular/fire/database/';
import { AngularFireAuthModule } from '@angular/fire/auth/';

import 'hammerjs';
import { RacesComponent } from './races/races.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowseComponent } from './browse/browse.component';

import { environment } from '../environments/environment';
import { SpecComponent } from './spec/spec.component';
import { CreateSpecComponent } from './create-spec/create-spec.component';
import { CreateRaceComponent } from './create-race/create-race.component';
import { RegisterComponent } from './register/register.component';

declare var Hammer: any;
@Injectable()
export class HammerConfig extends GestureConfig  {
  buildHammer(element: HTMLElement) {
    return new GestureConfig({touchAction: 'pan-y'}).buildHammer(element);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    BrowseComponent,
    SpecComponent,
    CreateSpecComponent,
    CreateRaceComponent,
    RegisterComponent
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
    HttpClientModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
