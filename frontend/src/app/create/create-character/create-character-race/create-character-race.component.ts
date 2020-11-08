import { Component, OnInit } from '@angular/core';
import { SortableType } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-character-race',
  templateUrl: './create-character-race.component.html',
  styleUrls: ['./create-character-race.component.scss']
})
export class CreateCharacterRaceComponent implements OnInit {

  filter: string = '';
  private collection: string = "races";
  private sort: SortableType = SortableType.Name;

  private selectedRace: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(title: string) {
    console.log(title);
    this.selectedRace = title;
  }

}
