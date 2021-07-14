import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirLineBookingComponent } from './AirLines/Components/air-line-booking/air-line-booking.component';
import { AirLineMainBodyComponent } from './AirLines/Components/air-line-main-body/air-line-main-body.component';
import { AirLineHeaderComponent } from './AirLines/Components/air-line-header/air-line-header.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { CharterBookingComponent } from './AirLines/Components/charter-booking/charter-booking.component';
import { CustomerComponent } from './Customer/Components/customer/customer.component';
import { LoginCustomerComponent } from './Customer/Components/login-customer/login-customer.component';
import { RegisterCustomerComponent } from './Customer/Components/register-customer/register-customer.component';

const routes: Routes = [
                           {
                             path: '',
                             component: MainHomeComponent
                           },
                            {
                              path: 'airline',
                              component: AirLineHeaderComponent,
                              children:[
                                {path:'',component:AirLineMainBodyComponent},
                                {path:'bookingAir',component:AirLineBookingComponent},
                                {path:'bookingCharter',component:CharterBookingComponent}
                                 ]
                            },
                            {
                              path:'customer',
                              component:CustomerComponent,
                              children:[
                                {path:'login',component:LoginCustomerComponent},
                                {path:'register',component:RegisterCustomerComponent}
                              ]
                            }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
