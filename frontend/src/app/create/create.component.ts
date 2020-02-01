import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  race: boolean = false;
  spec: boolean = false;
  talent: boolean = false;

  constructor(
    private router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const type = this._route.snapshot.params['type'];

    switch (type) {
      case 'race':
        this.race = true;
        break;
      case 'spec':
        this.spec = true;
        break;
      case 'talent':
        this.talent = true;
        break;
      default:
        this.router.navigate(['**'])
    }
  }

}
