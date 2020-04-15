import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { VehicleAttachments } from 'src/app/services/data.model';

@Component({
  selector: 'app-vehicleattachment',
  templateUrl: './vehicleattachment.component.html',
  styleUrls: ['./vehicleattachment.component.scss']
})
export class VehicleAttachmentComponent implements OnInit {

  public vehicleAttachment: string;

  vehicleAttachmentDoc: AngularFirestoreDocument<VehicleAttachments>;
  vehicleAttachmentObservable: Observable<VehicleAttachments>;
  vehicleAttachmentInfo: VehicleAttachments;

  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.vehicleAttachment = this._route.snapshot.params['vehicleAttachment'];

    this.vehicleAttachmentDoc = this.afStore.doc(`vehicleAttachments/${this.vehicleAttachment}`);
    this.vehicleAttachmentObservable = this.vehicleAttachmentDoc.valueChanges();
    this.vehicleAttachmentObservable.subscribe(doc => {
      this.vehicleAttachmentInfo = doc;
    });
  }

}
