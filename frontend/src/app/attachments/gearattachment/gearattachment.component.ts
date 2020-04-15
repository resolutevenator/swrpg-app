import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GearAttachments } from 'src/app/services/data.model';

@Component({
  selector: 'app-gearAttachment',
  templateUrl: './gearAttachment.component.html',
  styleUrls: ['./gearAttachment.component.scss']
})
export class GearAttachmentComponent implements OnInit {

  public gearAttachment: string;

  gearAttachmentDoc: AngularFirestoreDocument<GearAttachments>;
  gearAttachmentObservable: Observable<GearAttachments>;
  gearAttachmentInfo: GearAttachments;

  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.gearAttachment = this._route.snapshot.params['gearAttachment'];

    this.gearAttachmentDoc = this.afStore.doc(`gearAttachments/${this.gearAttachment}`);
    this.gearAttachmentObservable = this.gearAttachmentDoc.valueChanges();
    this.gearAttachmentObservable.subscribe(doc => {
      this.gearAttachmentInfo = doc;
    });
  }

}
