import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  
    employeeDetails = {};
    constructor(private _employeeService:EmployeeServiceService,private _router:Router) { }
  
  
    updateEmployee(){
      console.log(this.employeeDetails);
      this._employeeService.updateEmployee(this.employeeDetails).subscribe((data)=>{
        console.log(data);
        if(data){
          this._router.navigate(['employeeDetails']);
        }
      })
    }
    ngOnInit() {
      this.employeeDetails = this._employeeService.getFormData();
      console.log(this.employeeDetails);
    }
  
  }
  
