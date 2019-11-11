import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  type: string;
  data: any;

  constructor(
    private router: Router,
    private db: DatabaseService
  ) { }

  navigate(raceName: String) {
    this.router.navigate(['/' + this.type, raceName]);
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

  isBlack(books) {
    return books[0].startsWith("FaD")
  }
  isOrange(books) {
    return books[0].startsWith("EotE")
  }
  isRed(books) {
    return books[0].startsWith("FaD")
  }

  ngOnInit() {
    const url = this.router.url;
    const urlSegments = url.split('/');
    this.type = urlSegments[urlSegments.length - 1];

    this.db.getList(this.type).subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}
