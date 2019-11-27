import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Spec } from '../services/data.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.scss']
})
export class SpecListComponent implements OnInit {

  specCollection: AngularFirestoreCollection<Spec>;
  specs: Observable<Spec[]>;

  constructor(
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.specCollection = this.afStore.collection('specs', ref => {
      return ref.orderBy('name');
    });
    this.specs = this.specCollection.valueChanges();
  }
}
