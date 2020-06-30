import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Race } from '../../services/data.model'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() collection: string;

  @Output() listClicked = new EventEmitter<string>();

  listCollection: AngularFirestoreCollection<Race>;
  entries: Observable<Race[]>;

  constructor(
    private afStore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.listCollection = this.afStore.collection(this.collection, ref => {
      return ref.orderBy('name');
    });
    this.entries = this.listCollection.valueChanges();
  }  

  onEntryClicked(title: string) {
    // console.log(title);    
    this.listClicked.emit(title);
  }

  getCardClass(books: string[]) {
    if (books.length === 1) {
      return this.convertBookToColour(books[0])
    } else if (books.length === 2) {
      if (books[0].startsWith("Era") && books[1].startsWith("Era")) {
        return "blue";
      }
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
