import { Component, OnInit } from '@angular/core';
import { SortableType } from 'src/app/services/data.model';

@Component({
  selector: 'app-create-character-class',
  templateUrl: './create-character-class.component.html',
  styleUrls: ['./create-character-class.component.scss']
})
export class CreateCharacterClassComponent implements OnInit {

  filter: string = '';
  private collection: string = "careers";
  private sort: SortableType = SortableType.Name;

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(title: string) {
    console.log(title);
  }

}
