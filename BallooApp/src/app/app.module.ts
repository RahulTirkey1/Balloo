import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AirLineHeaderComponent } from './AirLines/Components/air-line-header/air-line-header.component';
import { AirLineMainBodyComponent } from './AirLines/Components/air-line-main-body/air-line-main-body.component';
import { AirLineBookingComponent } from './AirLines/Components/air-line-booking/air-line-booking.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirLineBookingService } from '../app/AirLines/Services/air-line-booking.service';
import { CharterBookingComponent } from './AirLines/Components/charter-booking/charter-booking.component';
import { CustomerComponent } from './Customer/Components/customer/customer.component';
import { RegisterCustomerComponent } from './Customer/Components/register-customer/register-customer.component';
import { LoginCustomerComponent } from './Customer/Components/login-customer/login-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    AirLineHeaderComponent,
    AirLineMainBodyComponent,
    AirLineBookingComponent,
    CharterBookingComponent,
    CustomerComponent,
    RegisterCustomerComponent,
    LoginCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AirLineBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
