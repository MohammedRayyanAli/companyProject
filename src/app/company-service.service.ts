import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private _http: Http) { }

  formData = {};
  saveNewCompany(parameter) {
    console.log(parameter)
    return this._http.post('/company/saveNewCompany', parameter).map(function (data) {
      let newData = data.json();
      if (newData.success) {
        return newData.data
       
      } else {
        return false;
      }
    });
  }

  fetchCompanyDetails() {
    return this._http.get('/company/completeCompanyDetails').map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data;
      }
    });
  }

  deleteCompany(id) {
    return this._http.post('/company/deleteOneCompany',{params:id}).map(function (data) {
      let newData = data.json();
      console.log("this is service file ")
       console.log(newData)
      if (newData.success) {
        return newData.companyData;
      }
    });
  }

  updateCompany(parameter) {
    return this._http.post('/company/updateOneCompany',parameter).map(function (data) {
      var newData = data.json();
      if (newData) {
        return newData.data;
      }
    });
  }

  setFormData(parameter){
    console.log(parameter);
    this.formData =parameter;
  }
  getFormData(){
    return this.formData;
  }
}
