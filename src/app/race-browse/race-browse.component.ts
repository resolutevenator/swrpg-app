import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database/';

@Component({
  selector: 'app-race-browse',
  templateUrl: './race-browse.component.html',
  styleUrls: ['./race-browse.component.scss']
})
export class RaceBrowseComponent implements OnInit {
  
  races: any;
  _raceSubscription: any;

  constructor(
    private router: Router,
    private db: AngularFireDatabase
    ) {
    this._raceSubscription = db.list('races/').valueChanges().subscribe(data => {
      this.races = data;
    }),(err) => {
      console.log('error: ', err)
    };
  }

  navigate(raceName: String) {
    this.router.navigate(['/race', raceName.toLowerCase()])
  }

  ngOnInit() {
  }

}
