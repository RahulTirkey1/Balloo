import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLineBookingComponent } from './air-line-booking.component';

describe('AirLineBookingComponent', () => {
  let component: AirLineBookingComponent;
  let fixture: ComponentFixture<AirLineBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirLineBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirLineBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
