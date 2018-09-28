import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  
  EmployeeList = [];

  constructor(private _router: Router, private employeeService: EmployeeServiceService) { }


  addEmployee() {

    this._router.navigate(['employee']);
  }


  updateEmployee(employee) {
    console.log(employee);
    this.employeeService.setFormData(employee);
    this._router.navigate(['/employeeUpdate']);
  }
  deleteEmployee(i,employee){
    let id = employee._id;
    this.employeeService.deleteEmployee(id).subscribe((data)=>{
      console.log("data from ts")
      console.log(data);
      if(data){
        this.EmployeeList.splice(i,1);
    }
    })

  }

  ngOnInit() {
    this.employeeService.fetchEmployeeDetails().subscribe((data) => {
      console.log(data);
      if (data && data.length > 0) {
        this.EmployeeList = data;
      }
    });
  }
}
