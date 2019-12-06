import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Data from '../../../../database.json';
import { RaceInfo, Race, Spec, SpecInfo } from '../services/data.model.js';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileToUpload: File = null;

  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) { }

  navigate(path: string) {
    this.router.navigate([path])
  }

  ngOnInit() {
  }

  debug() {
    // Object.keys(Data.races).forEach(key => {
    //   const race = Data.races[key];
    //   const newRace: Race = {
    //     name: race.name,
    //     key: key,
    //     books: race.books
    //   }
    //   const newRaceInfo: RaceInfo = {
    //     brawn: parseInt(race.brawn, 10),
    //     agility: parseInt(race.agility, 10),
    //     cunning: parseInt(race.cunning, 10),
    //     intellect: parseInt(race.intellect, 10),
    //     willpower: parseInt(race.willpower, 10),
    //     presence: parseInt(race.presence, 10),
    //     wounds: parseInt(race.woundThreshold, 10),
    //     strain: parseInt(race.strainThreshold, 10),
    //     xp: parseInt(race.startingXP, 10),
    //     abilities: race.specialAbilities
    //   }
    //   // console.log(race, newRace, newRaceInfo)

    //   this.afs.collection('races').doc(key).set(newRace);
    //   this.afs.collection('races').doc(key).collection('race').doc('content').set(newRaceInfo);

    // })

    // Object.keys(Data.specs).forEach(key => {
    //   const spec = Data.specs[key];
    //   const newSpec: Spec = {
    //     books:  spec.books,
    //     career: spec.career,
    //     key: key,
    //     name: spec.name
    //   }
    //   const newSpecInfo: SpecInfo = {
    //     bonusCareerSkills: spec.bonusCareerSkills,
    //     careerSkills: spec.careerSkills || [],
    //     talentTree: {
    //       horizontalConnections: {
    //         row0: spec.horizontalConnections[0],
    //         row1: spec.horizontalConnections[1],
    //         row2: spec.horizontalConnections[2],
    //         row3: spec.horizontalConnections[3],
    //         row4: spec.horizontalConnections[4]
    //       },
    //       verticalConnections: {
    //         row0: spec.verticalConnections[0],
    //         row1: spec.verticalConnections[1],
    //         row2: spec.verticalConnections[2],
    //         row3: spec.verticalConnections[3],
    //         row4: spec.verticalConnections[4]
    //       },
    //       row0: spec.talents[0],
    //       row1: spec.talents[1],
    //       row2: spec.talents[2],
    //       row3: spec.talents[3],
    //       row4: spec.talents[4]
    //     }
    //   }
    //   console.log(newSpec, newSpecInfo);
    //   this.afs.collection('specs').doc(key).set(newSpec);
    //   this.afs.collection('specs').doc(key).collection('spec').doc('content').set(newSpecInfo);


    // })

    Object.keys(Data.talents).forEach(key => {
      const talent = Data.talents[key];

      this.afs.collection('talents').doc(key).set(talent);
    })

    // const raceRef: AngularFirestoreDocument<Race> = this.afs.doc(`races/`);
    // raceRef.set(newAleena)
  }

}
