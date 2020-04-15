import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearattachmentComponent } from './gearattachment.component';

describe('GearattachmentComponent', () => {
  let component: GearattachmentComponent;
  let fixture: ComponentFixture<GearattachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearattachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
