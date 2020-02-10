import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SpecInfo, Spec } from '../services/data.model';
import { Observable } from 'rxjs';
// import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.scss']
})
export class SpecComponent implements OnInit {

  public spec: string;

  specDoc: AngularFirestoreDocument<SpecInfo>;
  specObservable: Observable<SpecInfo>;
  specInfo: SpecInfo;
  specParentDoc: AngularFirestoreDocument<Spec>;
  specParentObservable: Observable<Spec>;
  specParent: Spec;

  public careerSkills: string = '';
  public bonusSkills: string = '';

  talents = {}

  constructor(
    private _route: ActivatedRoute,
    private afStore: AngularFirestore
    // private db: DatabaseService
  ) { }

  ngOnInit() {
    this.spec = this._route.snapshot.params['specName'];
    
    this.specDoc = this.afStore.doc(`specs/${this.spec}/spec/content`);
    this.specObservable = this.specDoc.valueChanges();
    this.specObservable.subscribe(doc => {
      this.specInfo = doc;
      this.initStrings();
      this.initTalents();
    })
    this.specParentDoc = this.afStore.doc(`specs/${this.spec}`);
    this.specParentObservable = this.specParentDoc.valueChanges();
    this.specParentObservable.subscribe(doc => {
      this.specParent = doc;
    })


    // this.db.getSpecDataObject(this.spec).subscribe(data => {
    //   this.specData = data;
    //   console.log(data);
    //   this.initStrings();
    //   this.specData.talents.forEach(talentRow => {
    //     talentRow.forEach(talent => {
    //       this.db.getTalentObject(talent).subscribe(tData => {
    //         this.pushTalent(tData, talent);
    //       })
    //     });
    //   });
    // })
  }

  initTalents() {
    const talentTreeRef = this.specInfo.talentTree;

    let talentsList = [];

    this.addTalentsIfNotPresent(talentsList, talentTreeRef.row0)
    this.addTalentsIfNotPresent(talentsList, talentTreeRef.row1)
    this.addTalentsIfNotPresent(talentsList, talentTreeRef.row2)
    this.addTalentsIfNotPresent(talentsList, talentTreeRef.row3)
    this.addTalentsIfNotPresent(talentsList, talentTreeRef.row4)

    console.log(talentsList);

    talentsList.forEach(talent => {
      this.afStore.doc(`talents/${talent}`).valueChanges().subscribe(tData => {
        this.pushTalent(tData, talent);
        // console.log(tData);
      })
    })
  }

  addTalentsIfNotPresent(talentsList: string[], talentRow: string[]) {
    talentRow.forEach(talent => {
      talentsList.indexOf(talent) === -1 ? talentsList.push(talent) : console.log("already present")
    })
  }

  pushTalent(talent: Object, talentName: string) {
    // console.log(talentName, talent);
    this.talents[talentName] = talent;
    console.log(this.talents)
  }

  initStrings() {
    this.specInfo.careerSkills.forEach((value: string) => {
      if (value) {
        this.careerSkills = this.careerSkills + ' ' + value;
      }
    })

    this.specInfo.bonusCareerSkills.forEach((value: string) => {
      if (value) {
        this.bonusSkills = this.bonusSkills + ' ' + value;
      }
    })
  }

}
