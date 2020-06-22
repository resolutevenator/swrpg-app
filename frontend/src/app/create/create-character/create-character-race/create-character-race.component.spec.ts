import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterRaceComponent } from './create-character-race.component';

describe('CreateCharacterRaceComponent', () => {
  let component: CreateCharacterRaceComponent;
  let fixture: ComponentFixture<CreateCharacterRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
