import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceBrowseComponent } from './race-browse.component';

describe('RaceBrowseComponent', () => {
  let component: RaceBrowseComponent;
  let fixture: ComponentFixture<RaceBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
