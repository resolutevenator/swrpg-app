import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Spec } from '../services/data.model'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.scss']
})
export class SpecListComponent implements OnInit {

  specCollection: AngularFirestoreCollection<Spec>;
  specs: Observable<Spec[]>;

  constructor(
    private afStore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.specCollection = this.afStore.collection('specs', ref => {
      return ref.orderBy('name');
    });
    this.specs = this.specCollection.valueChanges();
  }

  navigate(raceName: String) {
    this.router.navigate(['/specs', raceName]);
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
