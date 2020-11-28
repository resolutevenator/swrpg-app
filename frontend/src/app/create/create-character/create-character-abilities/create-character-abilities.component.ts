import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  increaseStat(stat: string) {
    switch (stat) {
      case "b":
        this.brawn++;
        break;
      case "a":
        this.agility++;
        break;
      case "i":
        this.intellect++;
        break;
      case "c":
        this.cunning++;
        break;
      case "w":
        this.willpower++;
        break;
      case "p":
        this.presence++;
        break;
    }

  }

  decreaseStat(stat: string) {
    switch (stat) {
      case "b":
        this.brawn--;
        break;
      case "a":
        this.agility--;
        break;
      case "i":
        this.intellect--;
        break;
      case "c":
        this.cunning--;
        break;
      case "w":
        this.willpower--;
        break;
      case "p":
        this.presence--;
        break;
    }

  }

}
