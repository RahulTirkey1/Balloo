import { Component, OnInit } from '@angular/core';
import { Login } from '../../common/login';
@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  UserLogin:Login=new Login();

  constructor() { }

  ngOnInit(): void {
  }

  login()
  {
    alert('Hold on Buddy..!!! All Services will resume shortly'); 
  }
}
