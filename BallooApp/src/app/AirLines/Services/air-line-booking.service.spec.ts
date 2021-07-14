import { TestBed } from '@angular/core/testing';

import { AirLineBookingService } from './air-line-booking.service';

describe('AirLineBookingService', () => {
  let service: AirLineBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirLineBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
