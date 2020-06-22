import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterAbilitiesComponent } from './create-character-abilities.component';

describe('CreateCharacterAbilitiesComponent', () => {
  let component: CreateCharacterAbilitiesComponent;
  let fixture: ComponentFixture<CreateCharacterAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
