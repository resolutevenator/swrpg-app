import { Component, OnInit } from '@angular/core';
import { Race, RaceInfo } from '../../services/data.model'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';

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
    private _route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore
  ) {
    const state = history.state;
    if(state.parent && state.race) {
      this.books = state.parent.books;
      this.raceKey = state.parent.key;
      this.raceName = state.parent.name;

      this.agility = state.race.agility;
      this.brawn = state.race.brawn;
      this.cunning = state.race.cunning;
      this.intellect = state.race.intellect;
      this.presence = state.race.presence;
      this.willpower = state.race.willpower;
      this.xp = state.race.xp;
      this.wounds = state.race.wounds;
      this.strain = state.race.strain;
      this.specialAbilities = state.race.abilities;
    }
  }

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

  editAbility(i: number) {
    const abilityToEdit = this.specialAbilities[i];
    this.ability = abilityToEdit;
    this.removeAbility(i);
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

  editBook(i: number) {
    const bookToEdit = this.books[i];
    this.book = bookToEdit;
    this.removeBook(i);
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
    this.afs.collection('races').doc(this.raceKey).collection('race').doc('content').set(raceInfo);   
  }

}