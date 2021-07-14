import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { Flightbook } from '../common/flightbook';

@Injectable({
  providedIn: 'root'
})
export class AirLineBookingService {

  places=new BehaviorSubject<string[]>(['Bhubaneswar','Kolkata','Hyderabad','Bangalore','Mumbai','Delhi']);

  constructor() {
     }
}
