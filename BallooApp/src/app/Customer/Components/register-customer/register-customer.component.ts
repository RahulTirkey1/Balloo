import { Component, OnInit } from '@angular/core';
import { Register } from '../../common/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  UserRegister:Register=new Register();
  userRegistration:FormGroup;
  constructor(private RegistrationBuilder:FormBuilder) { }

  get name()
  {
    return this.userRegistration.get('name');
  }

  get email()
  {
    return this.userRegistration.get('email');
  }

  get password()
  {
    return this.userRegistration.get('password');
  }

  get age()
  {
    return this.userRegistration.get('age');
  }

  get gender()
  {
    return this.userRegistration.get('gender');
  }


  ngOnInit(): void {
    
     this.userRegistration=this.RegistrationBuilder.group({
         name:['',[Validators.required,Validators.minLength(6)]],
         email:['',[Validators.required,Validators.email]],
         password:['',[Validators.required,Validators.minLength(6)]],
         age:['',[Validators.required,Validators.maxLength(3)]],
         gender:['',[Validators.required,Validators.minLength(6)]]
     });

    
  }
     onSubmit(form:FormGroup)
     {
       alert('Hold on Buddy..!!! All Services will resume shortly');
     }
}
