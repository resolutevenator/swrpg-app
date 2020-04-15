import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Weapon } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.scss']
})
export class CreateWeaponComponent implements OnInit {

  talentName: string = '';
  talentDesc: string = '';
  talentPassive: boolean = false;
  talentRanked: boolean = false;
  talentKey: string = '';


  constructor(
    private afs: AngularFirestore,
    ) { }

  ngOnInit() {
  }

  submitTalent() {
    const weapon: Weapon = {
      description: this.talentDesc,
      name: this.talentName,
      ranked: this.talentRanked,
      key: this.talentKey
    }

    this.afs.collection('talents').doc(this.talentKey).set(weapon);
  }
}
