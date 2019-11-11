import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.scss']
})
export class SpecComponent implements OnInit {

  public spec: string;
  public careerSkills: string = '';
  public bonusSkills: string = '';

  specData: any;

  talents = {}

  constructor(
    private _route: ActivatedRoute,
    private db: DatabaseService
  ) { }



  ngOnInit() {
    this.spec = this._route.snapshot.params['specName'].toLowerCase();
    this.db.getSpecDataObject(this.spec).subscribe(data => {
      this.specData = data;
      console.log(data);
      this.initStrings();
      this.specData.talents.forEach(talentRow => {
        talentRow.forEach(talent => {
          this.db.getTalentObject(talent).subscribe(tData => {
            this.pushTalent(tData, talent);
          })
        });
      });
    })
  }

  pushTalent(talent: Object, talentName: string) {
    console.log(talentName, talent);
    this.talents[talentName] = talent;
  }

  initStrings() {
    this.specData.careerSkills.forEach((value: string) => {
      if (value) {
        this.careerSkills = this.careerSkills + ' ' + value;
      }
    })

    this.specData.bonusCareerSkills.forEach((value: string) => {
      if (value) {
        this.bonusSkills = this.bonusSkills + ' ' + value;
      }
    })
  }

}
