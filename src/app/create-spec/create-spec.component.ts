import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-create-spec',
  templateUrl: './create-spec.component.html',
  styleUrls: ['./create-spec.component.scss']
})
export class CreateSpecComponent implements OnInit {

  specName = '';
  careerName = '';
  book = '';
  specKey = '';
  talentName = '';
  talentDesc = '';
  talentPassive = false;
  talentRanked = false;
  talentKey = '';

  talents: any;

  skills = [
    'Astrogation',
    'Athletics',
    'Brawl',
    'Charm',
    'Coercion',
    'Computers',
    'Cool',
    'Coordination',
    'Deception',
    'Discipline',
    'Gunnery',
    'Knowledge (Core)',
    'Knowledge (Education)',
    'Knowledge (Lore)',
    'Knowledge (Outer Rim)',
    'Knowledge (Underworld)',
    'Knowledge (Warfare)',
    'Knowledge (Xenology)',
    'Leadership',
    'Mechanics',
    'Medicine',
    'Melee',
    'Negotiation',
    'Perception',
    'Piloting (Planetary)',
    'Piloting (Space)',
    'Ranged (Light)',
    'Ranged (Heavy)',
    'Resiliance',
    'Skulduggery',
    'Stealth',
    'Streetwise',
    'Survival',
    'Vigilance',
  ]

  careerSkills = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]

  additionalCareerSkills = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]

  talentTree = [
    [
      '',
      '',
      '',
      ''
    ], [
      '',
      '',
      '',
      ''
    ], [
      '',
      '',
      '',
      ''
    ], [
      '',
      '',
      '',
      ''
    ], [
      '',
      '',
      '',
      ''
    ],
  ]
  horizontalConnections = [
    [
      false, false, false
    ],
    [
      false, false, false
    ],
    [
      false, false, false
    ],
    [
      false, false, false
    ],
    [
      false, false, false
    ]
  ]
  verticalConnections = [
    [
      false, false, false, false
    ],
    [
      false, false, false, false
    ],
    [
      false, false, false, false
    ],
    [
      false, false, false, false
    ],
    [
      false, false, false, false
    ]
  ]

  constructor(
    private db: DatabaseService
  ) { }

  submitSpec() {
    const spec = {
      careerSkills: this.getSkills(),
      bonusCareerSkills: this.getAdditionalSkills(),
      book: this.book,
      career: this.careerName,
      name: this.specName,
      horizontalConnections: this.horizontalConnections,
      verticalConnections: this.verticalConnections,
      talents: this.talentTree
    }

    this.db.pushSpec(spec, this.specKey);
  }

  submitTalent() {
    const talent = {
      description: this.talentDesc,
      name: this.talentName,
      passive: this.talentPassive,
      ranked: this.talentRanked,
      key: this.talentKey
    }

    this.db.pushTalent(talent, this.talentKey);
  }

  getSkillsString() {
    var str = '';

    this.careerSkills.forEach((value, index) => {
      if (value) {
        str = str + ' ' + this.skills[index]
      }
    })

    return str;
  }

  getAdditionalSkillsString() {
    var str = '';

    this.additionalCareerSkills.forEach((value, index) => {
      if (value) {
        str = str + ' ' + this.skills[index]
      }
    })

    return str;
  }

  getSkills() {
    var sk = [];

    this.careerSkills.forEach((value, index) => {
      if (value) {
        sk.push(this.skills[index])
      }
    })

    return sk;
  }

  getAdditionalSkills() {
    var sk = [];

    this.additionalCareerSkills.forEach((value, index) => {
      if (value) {
        sk.push(this.skills[index])
      }
    })

    return sk;
  }

  ngOnInit() {
    this.db.getList('talents/').subscribe(data => {
      this.talents = data;
      console.log(data);
    });
  }

}
