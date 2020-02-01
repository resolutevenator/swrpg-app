import { Component, OnInit } from '@angular/core';
// import { DatabaseService } from '../database.service';

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
  book = ''

  specialAbilities = []

  constructor(
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
    const race = {
      agility: this.agility,
      brawn: this.brawn,
      cunning: this.cunning,
      intellect: this.intellect,
      key: this.raceKey,
      name: this.raceName,
      presence: this.presence,
      specialAbilities: this.specialAbilities,
      startingXP: this.xp,
      strainThreshold: this.strain,
      willpower: this.willpower,
      woundThreshold: this.wounds,
      books: this.books
    }

    console.log(race)

    // this.db.pushRace(race, this.raceKey);
  }

}