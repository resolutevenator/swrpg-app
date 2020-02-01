import { Component, OnInit } from '@angular/core';
import { Race, RaceInfo } from '../../services/data.model'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  raceName = '';
  raceKey = '';
  brawn: number = 0;
  agility: number = 0;
  intellect: number = 0;
  cunning: number = 0;
  willpower: number = 0;
  presence: number = 0;
  wounds: number = 0;
  strain: number = 0;
  xp: number = 0;
  ability = '';
  books = [];
  book = '';

  specialAbilities = []

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  addAbility() {
    this.specialAbilities.push(this.ability);
    this.ability = '';
  }

  removeAbility(i: number) {
    this.specialAbilities = this.specialAbilities.filter((value, index) => {
      return index != i;
    })
  }

  addBook() {
    this.books.push(this.book);
    this.book = '';
  }

  removeBook(i: number) {
    this.books = this.books.filter((value, index) => {
      return index != i;
    })
  }

  submitRace() {
    const race: Race = {
      key: this.raceKey,
      name: this.raceName,
      books: this.books
    }

    const raceInfo: RaceInfo = {
      agility: this.agility,
      brawn: this.brawn,
      cunning: this.cunning,
      intellect: this.intellect,
      presence: this.presence,
      abilities: this.specialAbilities,
      xp: this.xp,
      strain: this.strain,
      willpower: this.willpower,
      wounds: this.wounds,
    }

    this.afs.collection('races').doc(this.raceKey).set(race);
    this.afs.collection('races').doc(this.raceKey).collection('race').doc('content').set(raceInfo);;    
  }

}