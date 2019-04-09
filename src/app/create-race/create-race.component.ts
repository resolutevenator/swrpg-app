import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  raceName = '';
  raceKey = '';
  brawn = '';
  agility = '';
  intellect = '';
  cunning = '';
  willpower = '';
  presence = '';
  wounds = '';
  strain = '';
  xp = '';
  ability = '';
  book = "";

  specialAbilities = []

  constructor(
    private db: DatabaseService
  ) { }

  ngOnInit() {
  }

  addAbility() {
    this.specialAbilities.push(this.ability);
    this.ability = '';
  }

  removeAbility(i) {
    this.specialAbilities = this.specialAbilities.filter((value, index) => {
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
      books: this.book
    }

    this.db.pushRace(race, this.raceKey);
  }

}
