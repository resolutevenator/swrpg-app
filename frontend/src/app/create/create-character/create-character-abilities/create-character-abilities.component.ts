import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-character-abilities',
  templateUrl: './create-character-abilities.component.html',
  styleUrls: ['./create-character-abilities.component.scss']
})
export class CreateCharacterAbilitiesComponent implements OnInit {

  brawn: number = 1;
  agility: number = 1;
  intellect: number = 1;
  cunning: number = 1;
  willpower: number = 1;
  presence: number = 1;

  private minimumbrawn: number = 1;
  private minimumagility: number = 1;
  private minimumintellect: number = 1;
  private minimumcunning: number = 1;
  private minimumwillpower: number = 1;
  private minimumpresence: number = 1;

  skills = Object.values(Skills);

  currentXP: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  increaseStat(stat: string) {
    switch (stat) {
      case "b":
        if (this.spendXP((this.brawn + 1) * 10)) {
          this.brawn++;
        }
        break;
      case "a":
        if (this.spendXP((this.agility + 1) * 10)) {
          this.agility++;
        }
        break;
      case "i":
        if (this.spendXP((this.intellect + 1) * 10)) {
          this.intellect++;
        }
        break;
      case "c":
        if (this.spendXP((this.cunning + 1) * 10)) {
          this.cunning++;
        }
        break;
      case "w":
        if (this.spendXP((this.willpower + 1) * 10)) {
          this.willpower++;
        }
        break;
      case "p":
        if (this.spendXP((this.presence + 1) * 10)) {
          this.presence++;
        }
        break;
    }

  }

  clickSkillButton() {
    console.log("click")
  }

  decreaseStat(stat: string) {
    switch (stat) {
      case "b":
        if (this.brawn > this.minimumbrawn) {
          this.returnXP(this.brawn * 10)
          this.brawn--;
        }
        break;
      case "a":
        if (this.agility > this.minimumagility) {
          this.returnXP(this.agility * 10)
          this.agility--;
        }
        break;
      case "i":
        if (this.intellect > this.minimumintellect) {
          this.returnXP(this.intellect * 10)
          this.intellect--;
        }
        break;
      case "c":
        if (this.cunning > this.minimumcunning) {
          this.returnXP(this.cunning * 10)
          this.cunning--;
        }
        break;
      case "w":
        if (this.willpower > this.minimumwillpower) {
          this.returnXP(this.willpower * 10)
          this.willpower--;
        }
        break;
      case "p":
        if (this.presence > this.minimumpresence) {
          this.returnXP(this.presence * 10)
          this.presence--;
        }
        break;
    }

  }

  private spendXP(amount): boolean {
    if (this.currentXP > amount) {
      this.currentXP -= amount;
      return true;
    } else {
      return false;
    }
  }

  private returnXP(amount) {
    this.currentXP += amount;
  }

}
