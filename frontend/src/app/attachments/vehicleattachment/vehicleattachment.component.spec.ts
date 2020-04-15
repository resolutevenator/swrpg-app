import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleattachmentComponent } from './vehicleattachment.component';

describe('VehicleattachmentComponent', () => {
  let component: VehicleattachmentComponent;
  let fixture: ComponentFixture<VehicleattachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleattachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
