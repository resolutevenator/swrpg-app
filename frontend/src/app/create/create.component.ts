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
  armor: boolean = false;
  weapon: boolean = false;
  gear: boolean = false;
  vehicle: boolean = false;
  starship: boolean = false;

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
      case 'armor':
        this.armor = true;
        break;
      case 'weapon':
        this.weapon = true;
        break;
      case 'gear':
        this.gear = true;
        break;
      case 'vehicle':
        this.vehicle = true;
        break;
      case 'starship':
        this.starship = true;
        break;
      default:
        this.router.navigate(['**'])
    }
  }

}
