import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Weapon, WeaponCategory, Skills, RangeBand } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.scss']
})
export class CreateWeaponComponent implements OnInit {

  weaponName: string = '';
  weaponKey: string = '';
  category: WeaponCategory;
  skill: Skills;
  damage: number = 0;
  crit: number = 0;
  range: RangeBand;
  encum: number = 0;
  hp: number = 0;
  price: number = 0;
  rarity: number = 0;
  property: string = '';
  properties: string[] = [];
  damageAdditive: boolean = false;
  restricted: boolean = false;

  get weaponCategory() {return WeaponCategory;}
  get rangeBand() {return RangeBand;}

  constructor(
    private afs: AngularFirestore,
    ) { }

  ngOnInit() {
  }

  submitWeapon() {
    const weapon: Weapon = {
      name: this.weaponName,
      key: this.weaponKey,
      category: this.category,
      skill: this.skill,
      damage: this.damage,
      crit: this.crit,
      range: this.range,
      encum: this.encum,
      hp: this.hp,
      price: this.price,
      rarity: this.rarity,
      properties: this.properties,
      damageAdditive: this.damageAdditive,
      restricted: this.restricted
    }

    this.afs.collection('weapons').doc(this.weaponKey).set(weapon);
  }

  addProperty() {
    this.properties.push(this.property);
    this.property = '';
  }

  removeProperty(i: number) {
    this.properties.splice(i, 1);
  }

  editProperty(i: number) {
    const propertyToEdit = this.properties[i];
    this.property = propertyToEdit;
    this.removeProperty(i);
  }

  _skills = [
    'Brawl',
    'Gunnery',
    'Lightsaber',
    'Ranged (Light)',
    'Ranged (Heavy)'
  ]
}
