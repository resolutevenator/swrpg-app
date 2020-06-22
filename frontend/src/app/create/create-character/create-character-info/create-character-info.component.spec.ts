import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterInfoComponent } from './create-character-info.component';

describe('CreateCharacterInfoComponent', () => {
  let component: CreateCharacterInfoComponent;
  let fixture: ComponentFixture<CreateCharacterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
