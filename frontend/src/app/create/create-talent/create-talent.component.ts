import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Talent } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.scss']
})
export class CreateTalentComponent implements OnInit {

  talentName: string = '';
  talentDesc: string = '';
  talentPassive: boolean = false;
  talentRanked: boolean = false;
  talentKey: string = '';

  constructor(
    private afs: AngularFirestore
    ) { }

  ngOnInit() {
  }

  submitTalent() {
    const talent: Talent = {
      description: this.talentDesc,
      name: this.talentName,
      passive: this.talentPassive,
      ranked: this.talentRanked,
      key: this.talentKey
    }

    this.afs.collection('talents').doc(this.talentKey).set(talent);
  }

}
