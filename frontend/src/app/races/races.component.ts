import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { RaceInfo, Race } from '../services/data.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})

export class RacesComponent implements OnInit {

  public race: string;

  raceDoc: AngularFirestoreDocument<RaceInfo>;
  raceInfo: Observable<RaceInfo>;
  raceParentDoc: AngularFirestoreDocument<Race>;
  raceParent: Observable<Race>;

  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.race = this._route.snapshot.params['raceName'];
    
    this.raceDoc = this.afStore.doc(`races/${this.race}/race/content`);
    this.raceInfo = this.raceDoc.valueChanges();
    this.raceParentDoc = this.afStore.doc(`races/${this.race}`);
    this.raceParent = this.raceParentDoc.valueChanges();
  }

}
