import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGearComponent } from './create-gear.component';

describe('CreateGearComponent', () => {
  let component: CreateGearComponent;
  let fixture: ComponentFixture<CreateGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
