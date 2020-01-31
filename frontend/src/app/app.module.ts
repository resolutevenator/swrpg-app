import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

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
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';

import { AngularFireModule } from '@angular/fire/';
// import { AngularFireDatabaseModule } from '@angular/fire/database/';
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
