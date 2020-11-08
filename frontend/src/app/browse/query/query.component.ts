import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Race, SortableType } from '../../services/data.model'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  @Input() collection: string;
  @Input() sortBy: SortableType;
  @Input() query: string;
  //@Input() sortMethod: Function;

  @Output() listClicked = new EventEmitter<string>();

  listCollection: AngularFirestoreCollection<Race>;
  entries: Observable<Race[]>;

  private highlightedName: string = '';

  constructor(
    private afStore: AngularFirestore
  ) { }

  ngOnInit(): void {
    const queryComponents = this.query.split(" ");
    this.listCollection = this.afStore.collection(this.collection, ref => {
      // ref.where(queryComponents[0], '==', queryComponents[2])
      return ref.where(queryComponents[0], '==', queryComponents[2]);
    });
    this.entries = this.listCollection.valueChanges();
  }

  onEntryClicked(title: string) {
    this.listClicked.emit(title);
    if (this.highlightedName === title) {
      this.highlightedName = '';
    } else {
      this.highlightedName = title;
    }
  }

  isSelected(key: string) {
    return key === this.highlightedName;
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
