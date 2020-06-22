import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character-info',
  templateUrl: './create-character-info.component.html',
  styleUrls: ['./create-character-info.component.scss']
})
export class CreateCharacterInfoComponent implements OnInit {

  characterName: string;
  aorActive: boolean = false;
  fndActive: boolean = false;
  eoteActive: boolean = false;
  cwActive: boolean = false;
  rebActive: boolean = false;
  hbActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
