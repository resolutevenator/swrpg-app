import { Component, OnInit } from '@angular/core';

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

  panelOpenState = false;
  panel1OpenState = false;

  books = [];

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
  ) { }

  submitSpec() {
    const spec = {
      careerSkills: this.getSkills(),
      bonusCareerSkills: this.getAdditionalSkills(),
      books: this.books,
      career: this.careerName,
      name: this.specName,
      horizontalConnections: this.horizontalConnections,
      verticalConnections: this.verticalConnections,
      talents: this.talentTree,
      key: this.specKey
    }
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

  addBook() {
    this.books.push(this.book);
    this.book = '';
  }

  removeBook(i) {
    this.books = this.books.filter((value, index) => {
      return index != i;
    })
  }

  ngOnInit() {
    // this.db.getList('talents/').subscribe(data => {
    //   this.talents = data;
    //   console.log(data);
    // });
  }

}