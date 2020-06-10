import { Component, OnInit } from '@angular/core';
import { GearCategory, Gear } from 'src/app/services/data.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-gear',
  templateUrl: './create-gear.component.html',
  styleUrls: ['./create-gear.component.scss']
})
export class CreateGearComponent implements OnInit {

  gearName: string = '';
  gearKey: string = '';
  category: GearCategory;
  encum: number = 0;
  price: number = 0;
  rarity: number = 0;
  property: string = '';
  properties: string[] = [];
  restricted: boolean = false;

  get gearCategory() {return GearCategory;}

  constructor(
    private afs: AngularFirestore,
    ) { }

  ngOnInit() {
  }

  submitGear() {
    const gear: Gear = {
      name: this.gearName,
      key: this.gearKey,
      category: this.category,
      encum: this.encum,
      price: this.price,
      rarity: this.rarity,
      properties: this.properties,
      restricted: this.restricted
    }

    this.afs.collection('gear').doc(this.gearKey).set(gear);
  }

  addProperty() {
    this.properties.push(this.property);
    this.property = '';
  }

  removeProperty(i: number) {
    this.properties.splice(i, 1);
  }

}
