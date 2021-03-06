import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CustomersComponent } from './customers/customers.component';
import {CustomersModule} from './customers/customers.module';
import {SharedModule} from './shared/shared.module';
// import { CustomersListComponent } from './customers-list/customers-list.component';
@NgModule({
  declarations: [
    AppComponent,
   
  //  CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
