import { Component, OnInit } from '@angular/core';
import { AirLineBookingService } from '../../Services/air-line-booking.service';
import { AirLinePassenger } from '../../common/air-line-passenger';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { range } from 'rxjs';

@Component({
  selector: 'app-air-line-booking',
  templateUrl: './air-line-booking.component.html',
  styleUrls: ['./air-line-booking.component.css']
})
export class AirLineBookingComponent implements OnInit {

  passenger:AirLinePassenger=new AirLinePassenger();
  places:string[];
  newplace:string[];
  AirLineBookingForm: FormGroup;
  userCount:number=0;
  dates:Date=new Date();
  mxDate:any;
  mnDate:any;
  year:any;
  month:any;
  day:any;
  selection:number;
  ticketDisplay:string[]=['','','','','']
  
  constructor(private bookingService:AirLineBookingService,private airlineBook:FormBuilder) {

    this.minDate();
    this.maxDate();
   }
   get persons()
   {
     return this.AirLineBookingForm.get('persons') as FormArray;
   }
    get source()
   {
     return this.AirLineBookingForm.get('source');
   }
   get destination()
   {
     return this.AirLineBookingForm.get('destination');
   }

   get date()
   {
     return this.AirLineBookingForm.get('date');
   }

  addpersons() {
    let personArray=this.AirLineBookingForm.controls.persons as FormArray;
   // console.log(this.AirLineBookingForm.controls.persons.get('0'));
    let arrlength=personArray.length;
    if(arrlength<4)
    {
      this.userCount++;
      let newUsergroup: FormGroup = this.airlineBook.group({
      name: ['',[Validators.required,Validators.minLength(4)]],
      age: ['',Validators.required],
      gender: ['',Validators.required],
      seat:['',Validators.required]
    })
    this.persons.insert(arrlength,newUsergroup);
  }
  }

  removePersons(i) {
    this.userCount--;
    let usersArray = this.AirLineBookingForm.controls.persons as FormArray;
    usersArray.removeAt(i);
    this.ticketDisplay[i]='';
  }
  
  destinationchange()
  {
    let place=this.AirLineBookingForm.controls.source.value;
    this.newplace=this.places.filter(e=>e!=place);
  }

  minDate()
  {
    this.year = this.dates.getFullYear();                        // YYYY
    this.month = ("0"+(this.dates.getMonth()+1)).slice(-2);     // MM
    this.day = ("0"+this.dates.getDate()).slice(-2);           // DD
    this.mnDate = (this.year +"-"+this.month +"-"+this.day);
  }
  
  maxDate()
  {
    this.year = this.dates.getFullYear();                        // YYYY
    this.month = ("0"+(this.dates.getMonth()+2)).slice(-2);     // MM
    this.day = ("0"+this.dates.getDate()).slice(-2);           // DD
    this.mxDate=(this.year +"-"+this.month +"-"+this.day);
  }

  ngOnInit(): void {
    
    this.bookingService.places.subscribe(e=>
      {
        this.places=e;
      });
    this.bookingService.places.subscribe(e=>{
        this.newplace=e;
    }); 
    this.AirLineBookingForm=this.airlineBook.group({
      type:['AirPlane'],
      source:['',Validators.required],
      destination:['',Validators.required],
      date:['',Validators.required],
      persons:this.airlineBook.array([this.airlineBook.group({
        name:['',[Validators.required,Validators.minLength(4)]],
        age:['',[Validators.required,Validators.minLength(1)]],
        gender:['',Validators.required],
        seat:['',Validators.required]
      })])
    });
  }
  bookTickets(ticket:string)
  {
       
        if(this.selection==0)
        {
          if((this.ticketDisplay[1]!==ticket) && (this.ticketDisplay[2]!==ticket) && (this.ticketDisplay[3]!==ticket))
          {
            this.ticketDisplay[0]=ticket;
          this.AirLineBookingForm.get('persons.0').get('seat').setValue(ticket);
          }
        } 
        if(this.selection==1)
        {
          if((this.ticketDisplay[0]!==ticket) && (this.ticketDisplay[2]!==ticket) && (this.ticketDisplay[3]!==ticket))
          {
            this.ticketDisplay[1]=ticket;
          this.AirLineBookingForm.get('persons.1').get('seat').setValue(ticket);
          }
        }
        if(this.selection==2)
        {
          if((this.ticketDisplay[1]!==ticket) && (this.ticketDisplay[0]!==ticket) && (this.ticketDisplay[3]!==ticket))
          {
            this.ticketDisplay[2]=ticket;
          this.AirLineBookingForm.get('persons.2').get('seat').setValue(ticket);
          }
        }
        if(this.selection==3)
        {
          if((this.ticketDisplay[1]!==ticket) && (this.ticketDisplay[2]!==ticket) && (this.ticketDisplay[0]!==ticket))
          {
            this.ticketDisplay[3]=ticket;
          this.AirLineBookingForm.get('persons.3').get('seat').setValue(ticket)
          }
        }
  }

  onSubmit(form:FormGroup)
  {
    alert('Hold on Buddy..!!! All Services will resume shortly');

 //   console.log('Ticket Booked Successfully');
    this.passenger.type=form.value.type;
    this.passenger.source=form.value.source;
    this.passenger.destination=form.value.destination;
    this.passenger.date=form.value.date;
    this.passenger.persons=form.value.persons;
 //      console.log(this.passenger.persons);
 //      console.log(this.passenger.source+"-"+this.passenger.destination+"-"+this.passenger.date);
  }

}
