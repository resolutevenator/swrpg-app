import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})

export class RacesComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public race: string;

  raceData: any;

  constructor(
    private _route: ActivatedRoute,
    private db: DatabaseService
  ) {
  }

  ngOnInit() {
    this.race = this._route.snapshot.params['raceName'].toLowerCase();
    this.db.getRaceDataObject(this.race).subscribe(data => {
      this.raceData = data;
    });
  }

}
