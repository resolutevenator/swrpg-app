import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

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
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';

import { AngularFireModule } from '@angular/fire/';
import { AngularFireDatabaseModule } from '@angular/fire/database/';
import { AngularFireAuthModule } from '@angular/fire/auth/';

import 'hammerjs';
import { RacesComponent } from './races/races.component';
import { RaceBrowseComponent } from './race-browse/race-browse.component';

import { firebaseConfig } from '../../firebase-config';

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
    RaceBrowseComponent
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
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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
