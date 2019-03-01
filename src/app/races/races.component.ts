import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})

export class RacesComponent implements OnInit {

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
