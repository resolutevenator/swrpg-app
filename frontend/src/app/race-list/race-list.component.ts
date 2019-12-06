import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Race } from '../services/data.model'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  racesCollection: AngularFirestoreCollection<Race>;
  races: Observable<Race[]>;

  constructor(
    private afStore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.racesCollection = this.afStore.collection('races', ref => {
      return ref.orderBy('name');
    });
    this.races = this.racesCollection.valueChanges();
  }

  navigate(raceName: String) {
    this.router.navigate(['/races', raceName]);
  }

  getCardClass(books) {
    if (books.length === 1) {
      return this.convertBookToColour(books[0])
    } else if (books.length === 2) {
      const cssClass = this.convertBookToColour(books[0]) + '-' + this.convertBookToColour(books[1])
      return cssClass;
    } else {
      return 'orange-red-black'
    }

  }

  convertBookToColour(book: string) {
    if (book.startsWith("FaD")) {
      return "black"
    } else if (book.startsWith("EotE")) {
      return "orange"
    } else if (book.startsWith("AoR")) {
      return "red"
    } else {
      return "blue"
    }
  }

}
