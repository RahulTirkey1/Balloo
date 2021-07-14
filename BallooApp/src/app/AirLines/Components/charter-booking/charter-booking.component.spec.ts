import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterBookingComponent } from './charter-booking.component';

describe('CharterBookingComponent', () => {
  let component: CharterBookingComponent;
  let fixture: ComponentFixture<CharterBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharterBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharterBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
