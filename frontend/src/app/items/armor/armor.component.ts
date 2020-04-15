import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Armor } from 'src/app/services/data.model';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {

  public armor: string;

  armorDoc: AngularFirestoreDocument<Armor>;
  armorObservable: Observable<Armor>;
  armorInfo: Armor;
  
  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.armor = this._route.snapshot.params['armor'];

    this.armorDoc = this.afStore.doc(`armor/${this.armor}`);
    this.armorObservable = this.armorDoc.valueChanges();
    this.armorObservable.subscribe(doc => {
      this.armorInfo = doc;
    });
  }

}
