import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Spec, SpecInfo } from 'src/app/services/data.model';

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
    'Lightsaber',
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
    private afs: AngularFirestore
  ) { 
    const state = history.state;
    if(state.parent && state.spec) {
      this.books = state.parent.books;
      this.specKey = state.parent.key;
      this.specName = state.parent.name;
      this.careerName = state.parent.career;

      // this.careerSkills = state.spec.careerSkills; //undo array
      // this.additionalCareerSkills = state.spec.bonusCareerSkills; //undo array
      this.initSkills(state);
      this.initTalentTree(state);
    }

  }

  initSkills(state) {
    const career = state.spec.careerSkills;
    const additional = state.spec.bonusCareerSkills;

    career.forEach(skill => {
      this.careerSkills[this.skills.indexOf(skill)] = true;
    });

    additional.forEach(skill => {
      this.additionalCareerSkills[this.skills.indexOf(skill)] = true;
    })
  }

  initTalentTree(state) {
    this.talentTree[0] = state.spec.talentTree.row0; 
    this.talentTree[1] = state.spec.talentTree.row1;
    this.talentTree[2] = state.spec.talentTree.row2; 
    this.talentTree[3] = state.spec.talentTree.row3; 
    this.talentTree[4] = state.spec.talentTree.row4; 

    this.horizontalConnections[0] = state.spec.talentTree.horizontalConnections.row0;
    this.horizontalConnections[1] = state.spec.talentTree.horizontalConnections.row1;
    this.horizontalConnections[2] = state.spec.talentTree.horizontalConnections.row2;
    this.horizontalConnections[3] = state.spec.talentTree.horizontalConnections.row3;
    this.horizontalConnections[4] = state.spec.talentTree.horizontalConnections.row4;

    this.verticalConnections[0] = state.spec.talentTree.verticalConnections.row0;
    this.verticalConnections[1] = state.spec.talentTree.verticalConnections.row1;
    this.verticalConnections[2] = state.spec.talentTree.verticalConnections.row2;
    this.verticalConnections[3] = state.spec.talentTree.verticalConnections.row3;
    this.verticalConnections[4] = state.spec.talentTree.verticalConnections.row4;
  }

  submitSpec() {
    const spec: Spec = {
      books: this.books,
      career: this.careerName,
      name: this.specName,
      key: this.specKey
    }

    const specInfo: SpecInfo = {
      careerSkills: this.getSkills(),
      bonusCareerSkills: this.getAdditionalSkills(),
      talentTree: {
        row0: this.talentTree[0],
        row1: this.talentTree[1],
        row2: this.talentTree[2],
        row3: this.talentTree[3],
        row4: this.talentTree[4],
        horizontalConnections: {
          row0: this.horizontalConnections[0],
          row1: this.horizontalConnections[1],
          row2: this.horizontalConnections[2],
          row3: this.horizontalConnections[3],
          row4: this.horizontalConnections[4],
        },
        verticalConnections: {
          row0: this.verticalConnections[0],
          row1: this.verticalConnections[1],
          row2: this.verticalConnections[2],
          row3: this.verticalConnections[3],
          row4: this.verticalConnections[4],
        }
      }
    }

    this.afs.collection('specs').doc(this.specKey).set(spec);
    this.afs.collection('specs').doc(this.specKey).collection('spec').doc('content').set(specInfo);
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

  editBook(i: number) {
    const bookToEdit = this.books[i];
    this.book = bookToEdit;
    this.removeBook(i);
  }

  ngOnInit() {
    // this.db.getList('talents/').subscribe(data => {
    //   this.talents = data;
    //   console.log(data);
    // });
  }

}