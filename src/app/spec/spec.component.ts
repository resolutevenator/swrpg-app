import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.scss']
})
export class SpecComponent implements OnInit {

  public spec: string;

  specData: any;

  constructor(
    private _route: ActivatedRoute,
    private db: DatabaseService
  ) { }

  ngOnInit() {
    this.spec = this._route.snapshot.params['specName'].toLowerCase();
    this.db.getSpecDataObject(this.spec).subscribe(data => {
      this.specData = data;
      console.log(data);
    })
  }

}
