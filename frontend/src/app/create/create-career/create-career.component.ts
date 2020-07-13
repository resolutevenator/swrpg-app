import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Career } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.scss']
})
export class CreateCareerComponent implements OnInit {

  careerName: string = '';
  careerKey: string = '';
  careerSeries: string = '';
  books = [];
  book = '';

  constructor(
    private afs: AngularFirestore,
    ) { }

  ngOnInit() {
  }

  addBook() {
    this.books.push(this.book);
    this.book = '';
  }

  removeBook(i: number) {
    this.books = this.books.filter((value, index) => {
      return index != i;
    })
  }

  editBook(i: number) {
    const bookToEdit = this.books[i];
    this.book = bookToEdit;
    this.removeBook(i);
  }

  submitCareer() {
    const career: Career = {
      name: this.careerName,
      key: this.careerKey,
      series: this.careerSeries,
      books: this.books
    } 

    this.afs.collection('careers').doc(this.careerKey).set(career);
  }
}
