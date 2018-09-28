import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formRecord = {};

  constructor(private _companyService : EmployeeServiceService, private _router:Router, private myroute:ActivatedRoute) { }

  saveEmployee(){
    console.log("this is formData");
   // console.log(this.formRecord);

    this._companyService.saveNewEmployee(this.formRecord).subscribe((data) =>{
     
       if(data){
       // console.log(data + " tt")
      //this._router.navigateByUrl('companyDetails');
      this._router.navigate(['/employeeDetails']);
      
       }
    });
    
  }


  ngOnInit() {
  }

}

