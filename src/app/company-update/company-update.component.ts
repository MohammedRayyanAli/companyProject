import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  companyDetails = {};
  constructor(private _companyService:CompanyServiceService,private _router:Router) { }


  updateCompany(){
    console.log(this.companyDetails);
    this._companyService.updateCompany(this.companyDetails).subscribe((data)=>{
      console.log(data);
      if(data){
        this._router.navigate(['companyDetails']);
      }
    })
  }
  ngOnInit() {
    this.companyDetails = this._companyService.getFormData();
    console.log(this.companyDetails);
  }

}
