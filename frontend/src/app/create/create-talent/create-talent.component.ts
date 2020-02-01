import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.scss']
})
export class CreateTalentComponent implements OnInit {

  talentName = '';
  talentDesc = '';
  talentPassive = false;
  talentRanked = false;
  talentKey = '';

  constructor() { }

  ngOnInit() {
  }

  submitTalent() {
    const talent = {
      description: this.talentDesc,
      name: this.talentName,
      passive: this.talentPassive,
      ranked: this.talentRanked,
      key: this.talentKey
    }

  }

}
