import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

 
  constructor(private _http: Http) { }

  formData = {};
  saveNewEmployee(parameter) {
    console.log(parameter)
    return this._http.post('/employee/saveNewEmployee', parameter).map(function (data) {
      let newData = data.json();
      if (newData.success) {
        return newData.data
       
      } else {
        return false;
      }
    });
  }

  fetchEmployeeDetails() {
    return this._http.get('/employee/completeEmployeeDetails').map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data;
      }
    });
  }

  deleteEmployee(id) {
    return this._http.post('/employee/deleteOneEmployee',{params:id}).map(function (data) {
      let newData = data.json();
      console.log("this is service file ")
       console.log(newData)
      if (newData.success) {
        return newData.employeeData;
      }
    });
  }

  updateEmployee(parameter) {
    return this._http.post('/employee/updateOneEmployee',parameter).map(function (data) {
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

