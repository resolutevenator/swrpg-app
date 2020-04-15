import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Gear } from 'src/app/services/data.model';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  public gear: string;

  gearDoc: AngularFirestoreDocument<Gear>;
  gearObservable: Observable<Gear>;
  gearInfo: Gear;

  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.gear = this._route.snapshot.params['gear'];

    this.gearDoc = this.afStore.doc(`gear/${this.gear}`);
    this.gearObservable = this.gearDoc.valueChanges();
    this.gearObservable.subscribe(doc => {
      this.gearInfo = doc;
    });
  }

}
