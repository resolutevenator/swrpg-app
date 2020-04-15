import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from 'src/app/services/data.model';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  public weapon: string;

  weaponDoc: AngularFirestoreDocument<Weapon>;
  weaponObservable: Observable<Weapon>;
  weaponInfo: Weapon;

  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.weapon = this._route.snapshot.params['weapon'];

    this.weaponDoc = this.afStore.doc(`weapons/${this.weapon}`);
    this.weaponObservable = this.weaponDoc.valueChanges();
    this.weaponObservable.subscribe(doc => {
      this.weaponInfo = doc;
    });
  }

}
