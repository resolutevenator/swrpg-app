import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterClassComponent } from './create-character-class.component';

describe('CreateCharacterClassComponent', () => {
  let component: CreateCharacterClassComponent;
  let fixture: ComponentFixture<CreateCharacterClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
