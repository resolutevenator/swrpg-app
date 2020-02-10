import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import Data from '../../../../database.json';
import { RaceInfo, Race, Spec, SpecInfo, ActionType } from '../services/data.model.js';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileToUpload: File = null;

  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) { }

  navigate(path: string) {
    this.router.navigate([path])
  }

  ngOnInit() {
  }

  updateData() {
  }

}
