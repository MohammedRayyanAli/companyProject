import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { HomeComponent } from './home/home.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'companyUpdate', component:CompanyUpdateComponent},
  { path: 'employee', component:EmployeeComponent},
  { path: 'employeeDetails', component:EmployeeDetailsComponent},
  { path: 'employeeUpdate', component:EmployeeUpdateComponent}
  //{ path: '/company/comapnyDetails', component:CompanyDetailsComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})


export class AppRoutingModule { }