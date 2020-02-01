import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStarshipComponent } from './create-starship.component';

describe('CreateStarshipComponent', () => {
  let component: CreateStarshipComponent;
  let fixture: ComponentFixture<CreateStarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
