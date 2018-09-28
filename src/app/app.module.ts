import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }  from './app.routing';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

//these are custom service file
import { CompanyServiceService } from './company-service.service';
import { HomeComponent } from './home/home.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeServiceService } from './employee-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyUpdateComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeUpdateComponent
  ],	
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ CompanyServiceService,EmployeeServiceService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
