import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Race } from '../services/data.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  racesCollection: AngularFirestoreCollection<Race>;
  races: Observable<Race[]>;

  constructor(
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.racesCollection = this.afStore.collection('races', ref => {
      return ref.orderBy('name');
    });
    this.races = this.racesCollection.valueChanges();
  }

}
