import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-race-browse',
  templateUrl: './race-browse.component.html',
  styleUrls: ['./race-browse.component.scss']
})
export class RaceBrowseComponent implements OnInit {

  races: any;

  constructor(
    private router: Router,
    private db: DatabaseService
    ) { }

  navigate(raceName: String) {
    this.router.navigate(['/race', raceName]);
  }

  ngOnInit() {
    this.db.getRacesList().subscribe(data => {
      this.races = data;
    });
  }

}
