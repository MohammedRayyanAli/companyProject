import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import { CompanyServiceService } from '../company-service.service';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  CompanyList = [];

  constructor(private _router: Router, private companyService: CompanyServiceService) { }


  addCompany() {

    this._router.navigate(['company']);
  }


  updateCompany(company) {
    console.log(company);
    this.companyService.setFormData(company);
    this._router.navigate(['/companyUpdate']);
  }
  
  deleteCompany(i,company) {
    let id = company._id;
    this.companyService.deleteCompany(id).subscribe((data)=>{
      console.log("data from ts")
      console.log(data);
      if(data){
        this.CompanyList.splice(i,1);
    }
    })

  }

  ngOnInit() {
    this.companyService.fetchCompanyDetails().subscribe((data) => {
      console.log(data);
      if (data && data.length > 0) {
        this.CompanyList = data;
      }
    });
  }
}

