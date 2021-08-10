import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

console.log("Lazy Loading works");

@NgModule({
  declarations: [
    CustomersComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
