import { Component, OnInit } from '@angular/core';
import { ArmorCategory, Armor } from 'src/app/services/data.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-armor',
  templateUrl: './create-armor.component.html',
  styleUrls: ['./create-armor.component.scss']
})
export class CreateArmorComponent implements OnInit {

  armorName: string = '';
  armorKey: string = '';
  category: ArmorCategory;
  meleeDefense: number = 0;
  rangedDefense: number = 0;
  soak: number = 0;
  price: number = 0;
  encum: number = 0;
  hp: number = 0;
  rarity: number = 0;
  restricted: boolean = false;
  property: string = '';
  properties: string[] = [];

  get armorCategory() { return ArmorCategory; }

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
  }

  submitArmor() {
    const armor: Armor = {
      name: this.armorName,
      key: this.armorKey,
      category: this.category,
      meleeDefense: this.meleeDefense,
      rangedDefense: this.rangedDefense,
      soak: this.soak,
      price: this.price,
      encum: this.encum,
      hp: this.hp,
      rarity: this.rarity,
      restricted: this.restricted,
      properties: this.properties
    }

    this.afs.collection('armor').doc(this.armorKey).set(armor);
  }

  addProperty() {
    this.properties.push(this.property);
    this.property = '';
  }

  removeProperty(i: number) {
    this.properties.splice(i, 1);
  }

}
