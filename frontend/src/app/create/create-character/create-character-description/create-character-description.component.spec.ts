import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterDescriptionComponent } from './create-character-description.component';

describe('CreateCharacterDescriptionComponent', () => {
  let component: CreateCharacterDescriptionComponent;
  let fixture: ComponentFixture<CreateCharacterDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
