import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import { CompanyServiceService } from '../company-service.service';
import { CompanyDetailsComponent } from '../company-details/company-details.component';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  formRecord = {};

  constructor(private _companyService : CompanyServiceService, private _router:Router, private myroute:ActivatedRoute) { }

  saveCompany(){
    console.log("this is formData");
   // console.log(this.formRecord);

    this._companyService.saveNewCompany(this.formRecord).subscribe((data) =>{
     
       if(data){
       // console.log(data + " tt")
      //this._router.navigateByUrl('companyDetails');
      this._router.navigate(['/companyDetails']);
      
       }
    });
    
  }


  ngOnInit() {
  }

}

