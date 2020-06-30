import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent implements OnInit {

  @Input() title: string;
  @Input() key: string;
  @Input() class: string;

  @Output() entryClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.entryClicked.emit(this.key);

    //css to pick highlight on click
  }

}
