import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  
  public collection: string;

  constructor(
    private router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.collection = this._route.snapshot.params['type'];
  }

  onClicked(title: string) {
    this.router.navigate([this.collection, title]);
  }

}
