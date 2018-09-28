(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n    <!-- Bootstrap CSS -->\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n\n    <title>Company Project</title>\n  </head>\n  <body>\n   <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Company Project</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Company\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"company\">Company</a>\n          <a class=\"dropdown-item\" routerLink=\"companyDetails\">Company Details</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n         Employee\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"employee\">Employee</a>\n          <a class=\"dropdown-item\" routerLink=\"employeeDetails\">Employee Details</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n     </body>\n</html>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'companyProject';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/company-details/company-details.component.ts");
/* harmony import */ var _company_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company-service.service */ "./src/app/company-service.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-update/company-update.component */ "./src/app/company-update/company-update.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee-update/employee-update.component */ "./src/app/employee-update/employee-update.component.ts");
/* harmony import */ var _employee_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee-service.service */ "./src/app/employee-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//these are custom service file







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"],
                _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_8__["CompanyDetailsComponent"],
                _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_11__["CompanyUpdateComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"],
                _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeDetailsComponent"],
                _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeUpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [_company_service_service__WEBPACK_IMPORTED_MODULE_9__["CompanyServiceService"], _employee_service_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/company-details/company-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-update/company-update.component */ "./src/app/company-update/company-update.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-update/employee-update.component */ "./src/app/employee-update/employee-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"] },
    { path: 'companyDetails', component: _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_4__["CompanyDetailsComponent"] },
    { path: 'companyUpdate', component: _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_6__["CompanyUpdateComponent"] },
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
    { path: 'employeeDetails', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailsComponent"] },
    { path: 'employeeUpdate', component: _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeUpdateComponent"] }
    //{ path: '/company/comapnyDetails', component:CompanyDetailsComponent}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/company-details/company-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company-details/company-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-details/company-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company-details/company-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"float:right;margin-bottom: 10px;margin-top: 10px;\">\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addCompany()\">Add Company</button>\n  </div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>#Id</th>\n        <th>Company ID</th>\n        <th>Company Name</th>\n        <th>Company Adress</th>\n        <th>Company Type</th>\n        <th scope=\"col\">Update Company</th>\n        <th scope=\"col\">Delete Company</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let company of CompanyList; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{company.company_id}}</td>\n        <td>{{company.company_name}}</td>\n        <td>{{company.company_adress}}</td>\n        <td>{{company.company_type}}</td>\n       <td style=\"text-align: center\"><button type=\"submit\" class=\"btn btn-success\" (click)=\"updateCompany(company)\">Update</button></td>\n        <td style=\"text-align: center\"><button type=\"submit\" class=\"btn btn-danger\" (click)=\"deleteCompany(i,company)\">Delete</button></td>\n\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/company-details/company-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company-details/company-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company-service.service */ "./src/app/company-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(_router, companyService) {
        this._router = _router;
        this.companyService = companyService;
        this.CompanyList = [];
    }
    CompanyDetailsComponent.prototype.addCompany = function () {
        this._router.navigate(['company']);
    };
    CompanyDetailsComponent.prototype.updateCompany = function (company) {
        console.log(company);
        this.companyService.setFormData(company);
        this._router.navigate(['/companyUpdate']);
    };
    CompanyDetailsComponent.prototype.deleteCompany = function (i, company) {
        var _this = this;
        var id = company._id;
        this.companyService.deleteCompany(id).subscribe(function (data) {
            console.log("data from ts");
            console.log(data);
            if (data) {
                _this.CompanyList.splice(i, 1);
            }
        });
    };
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.fetchCompanyDetails().subscribe(function (data) {
            console.log(data);
            if (data && data.length > 0) {
                _this.CompanyList = data;
            }
        });
    };
    CompanyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__(/*! ./company-details.component.html */ "./src/app/company-details/company-details.component.html"),
            styles: [__webpack_require__(/*! ./company-details.component.css */ "./src/app/company-details/company-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServiceService"]])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/company-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/company-service.service.ts ***!
  \********************************************/
/*! exports provided: CompanyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServiceService", function() { return CompanyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyServiceService = /** @class */ (function () {
    function CompanyServiceService(_http) {
        this._http = _http;
        this.formData = {};
    }
    CompanyServiceService.prototype.saveNewCompany = function (parameter) {
        console.log(parameter);
        return this._http.post('/company/saveNewCompany', parameter).map(function (data) {
            var newData = data.json();
            if (newData.success) {
                return newData.data;
            }
            else {
                return false;
            }
        });
    };
    CompanyServiceService.prototype.fetchCompanyDetails = function () {
        return this._http.get('/company/completeCompanyDetails').map(function (data) {
            var newData = data.json();
            if (newData.success) {
                return newData.data;
            }
        });
    };
    CompanyServiceService.prototype.deleteCompany = function (id) {
        return this._http.post('/company/deleteOneCompany', { params: id }).map(function (data) {
            var newData = data.json();
            console.log("this is service file ");
            console.log(newData);
            if (newData.success) {
                return newData.companyData;
            }
        });
    };
    CompanyServiceService.prototype.updateCompany = function (parameter) {
        return this._http.post('/company/updateOneCompany', parameter).map(function (data) {
            var newData = data.json();
            if (newData) {
                return newData.data;
            }
        });
    };
    CompanyServiceService.prototype.setFormData = function (parameter) {
        console.log(parameter);
        this.formData = parameter;
    };
    CompanyServiceService.prototype.getFormData = function () {
        return this.formData;
    };
    CompanyServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CompanyServiceService);
    return CompanyServiceService;
}());



/***/ }),

/***/ "./src/app/company-update/company-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company-update/company-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-update/company-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company-update/company-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form name=\"companyForm\" style=\"margin-top: 30px;\">\n  \n      <div class=\"form-group\">\n        <label for=\"companyId\">Company Id :</label>\n        <input type=\"text\" class=\"form-control\" id=\"companyId\" name=\"companyId\" [(ngModel)]=\"companyDetails.company_id\"\n          placeholder=\"Company Id\">\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"companyName\">Company Name :</label>\n        <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" [(ngModel)]=\"companyDetails.company_name\"\n          placeholder=\"Company Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"companyType\">Company Type :</label>\n        <input type=\"text\" class=\"form-control\" id=\"companyType\" name=\"companyType\" [(ngModel)]=\"companyDetails.company_type\"\n          placeholder=\"Company Type\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"companyAdress\">Company Address :</label>\n        <input type=\"text\" class=\"form-control\" id=\"companyAdress\" name=\"companyAdress\" [(ngModel)]=\"companyDetails.company_adress\"\n          placeholder=\"Company Adress\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\" (click)=\"updateCompany()\">Update</button>\n    </form>\n  \n  </div>\n  \n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/company-update/company-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company-update/company-update.component.ts ***!
  \************************************************************/
/*! exports provided: CompanyUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUpdateComponent", function() { return CompanyUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company-service.service */ "./src/app/company-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyUpdateComponent = /** @class */ (function () {
    function CompanyUpdateComponent(_companyService, _router) {
        this._companyService = _companyService;
        this._router = _router;
        this.companyDetails = {};
    }
    CompanyUpdateComponent.prototype.updateCompany = function () {
        var _this = this;
        console.log(this.companyDetails);
        this._companyService.updateCompany(this.companyDetails).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this._router.navigate(['companyDetails']);
            }
        });
    };
    CompanyUpdateComponent.prototype.ngOnInit = function () {
        this.companyDetails = this._companyService.getFormData();
        console.log(this.companyDetails);
    };
    CompanyUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-update',
            template: __webpack_require__(/*! ./company-update.component.html */ "./src/app/company-update/company-update.component.html"),
            styles: [__webpack_require__(/*! ./company-update.component.css */ "./src/app/company-update/company-update.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service_service__WEBPACK_IMPORTED_MODULE_1__["CompanyServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompanyUpdateComponent);
    return CompanyUpdateComponent;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form name=\"companyForm\" style=\"margin-top: 30px;\">\n\n    <div class=\"form-group\">\n      <label for=\"companyId\">Company Id :</label>\n      <input type=\"text\" class=\"form-control\" id=\"companyId\" name=\"companyId\" [(ngModel)]=\"formRecord.companyId\"\n        placeholder=\"Company Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"companyName\">Company Name :</label>\n      <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" [(ngModel)]=\"formRecord.companyName\"\n        placeholder=\"Company Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"companyType\">Company Type :</label>\n      <input type=\"text\" class=\"form-control\" id=\"companyType\" name=\"companyType\" [(ngModel)]=\"formRecord.companyType\"\n        placeholder=\"Company Type\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"companyAdress\">Company Address :</label>\n      <input type=\"text\" class=\"form-control\" id=\"companyAdress\" name=\"companyAdress\" [(ngModel)]=\"formRecord.companyAdress\"\n        placeholder=\"Company Adress\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\" (click)=\"saveCompany()\">Submit</button>\n  </form>\n\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company-service.service */ "./src/app/company-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(_companyService, _router, myroute) {
        this._companyService = _companyService;
        this._router = _router;
        this.myroute = myroute;
        this.formRecord = {};
    }
    CompanyComponent.prototype.saveCompany = function () {
        var _this = this;
        console.log("this is formData");
        // console.log(this.formRecord);
        this._companyService.saveNewCompany(this.formRecord).subscribe(function (data) {
            if (data) {
                // console.log(data + " tt")
                //this._router.navigateByUrl('companyDetails');
                _this._router.navigate(['/companyDetails']);
            }
        });
    };
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/employee-details/employee-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"float:right;margin-bottom: 10px;margin-top: 10px;\">\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addEmployee()\">Add Employee</button>\n  </div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>#Id</th>\n        <th>Employee ID</th>\n        <th>Employee Name</th>\n        <th>Employee Adress</th>\n        <th>Employee Type</th>\n        <th scope=\"col\">Update Employee</th>\n        <th scope=\"col\">Delete Employee</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let employee of EmployeeList; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{employee.employee_id}}</td>\n        <td>{{employee.employee_name}}</td>\n        <td>{{employee.employee_adress}}</td>\n        <td>{{employee.employee_type}}</td>\n      <td style=\"text-align: center\"><button type=\"submit\" class=\"btn btn-success\" (click)=\"updateEmployee(employee)\">Update</button></td>\n      <td style=\"text-align: center\"><button type=\"submit\" class=\"btn btn-danger\" (click)=\"deleteEmployee(i,employee)\">Delete</button></td>\n\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee-service.service */ "./src/app/employee-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(_router, employeeService) {
        this._router = _router;
        this.employeeService = employeeService;
        this.EmployeeList = [];
    }
    EmployeeDetailsComponent.prototype.addCompany = function () {
        this._router.navigate(['employee']);
    };
    EmployeeDetailsComponent.prototype.updateEmployee = function (employee) {
        console.log(employee);
        this.employeeService.setFormData(employee);
        this._router.navigate(['/employeeUpdate']);
    };
    EmployeeDetailsComponent.prototype.deleteEmployee = function (i, employee) {
        var _this = this;
        var id = employee._id;
        this.employeeService.deleteEmployee(id).subscribe(function (data) {
            console.log("data from ts");
            console.log(data);
            if (data) {
                _this.EmployeeList.splice(i, 1);
            }
        });
    };
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.fetchEmployeeDetails().subscribe(function (data) {
            console.log(data);
            if (data && data.length > 0) {
                _this.EmployeeList = data;
            }
        });
    };
    EmployeeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee-details/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _employee_service_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeServiceService"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employee-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/employee-service.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeServiceService", function() { return EmployeeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeServiceService = /** @class */ (function () {
    function EmployeeServiceService(_http) {
        this._http = _http;
        this.formData = {};
    }
    EmployeeServiceService.prototype.saveNewEmployee = function (parameter) {
        console.log(parameter);
        return this._http.post('/employee/saveNewEmployee', parameter).map(function (data) {
            var newData = data.json();
            if (newData.success) {
                return newData.data;
            }
            else {
                return false;
            }
        });
    };
    EmployeeServiceService.prototype.fetchEmployeeDetails = function () {
        return this._http.get('/employee/completeEmployeeDetails').map(function (data) {
            var newData = data.json();
            if (newData.success) {
                return newData.data;
            }
        });
    };
    EmployeeServiceService.prototype.deleteEmployee = function (id) {
        return this._http.post('/employee/deleteOneEmployee', { params: id }).map(function (data) {
            var newData = data.json();
            console.log("this is service file ");
            console.log(newData);
            if (newData.success) {
                return newData.employeeData;
            }
        });
    };
    EmployeeServiceService.prototype.updateEmployee = function (parameter) {
        return this._http.post('/employee/updateOneEmployee', parameter).map(function (data) {
            var newData = data.json();
            if (newData) {
                return newData.data;
            }
        });
    };
    EmployeeServiceService.prototype.setFormData = function (parameter) {
        console.log(parameter);
        this.formData = parameter;
    };
    EmployeeServiceService.prototype.getFormData = function () {
        return this.formData;
    };
    EmployeeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EmployeeServiceService);
    return EmployeeServiceService;
}());



/***/ }),

/***/ "./src/app/employee-update/employee-update.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-update/employee-update.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee-update/employee-update.component.html":
/*!****************************************************************!*\
  !*** ./src/app/employee-update/employee-update.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form name=\"EmployeeForm\" style=\"margin-top: 30px;\">\n\n    <div class=\"form-group\">\n      <label for=\"employeeId\">Employee Id :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeId\" name=\"employeeId\" [(ngModel)]=\"employeeDetails.employee_id\"\n        placeholder=\"Employee Id\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"employeeName\">Employee Name :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeName\" name=\"employeeName\" [(ngModel)]=\"employeeDetails.employee_name\"\n        placeholder=\"Employee Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"employeeType\">Employee Type :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeType\" name=\"employeeType\" [(ngModel)]=\"employeeDetails.employee_type\"\n        placeholder=\"Employee Type\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"employeeAdress\">Employee Address :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeAdress\" name=\"employeeAdress\" [(ngModel)]=\"employeeDetails.employee_adress\"\n        placeholder=\"Employee Adress\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\" (click)=\"updateEmployee()\">Update</button>\n  </form>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/employee-update/employee-update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-update/employee-update.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeUpdateComponent", function() { return EmployeeUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee-service.service */ "./src/app/employee-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeUpdateComponent = /** @class */ (function () {
    function EmployeeUpdateComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.employeeDetails = {};
    }
    EmployeeUpdateComponent.prototype.updateEmployee = function () {
        var _this = this;
        console.log(this.employeeDetails);
        this._employeeService.updateEmployee(this.employeeDetails).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this._router.navigate(['employeeDetails']);
            }
        });
    };
    EmployeeUpdateComponent.prototype.ngOnInit = function () {
        this.employeeDetails = this._employeeService.getFormData();
        console.log(this.employeeDetails);
    };
    EmployeeUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-update',
            template: __webpack_require__(/*! ./employee-update.component.html */ "./src/app/employee-update/employee-update.component.html"),
            styles: [__webpack_require__(/*! ./employee-update.component.css */ "./src/app/employee-update/employee-update.component.css")]
        }),
        __metadata("design:paramtypes", [_employee_service_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeUpdateComponent);
    return EmployeeUpdateComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form name=\"employeeForm\" style=\"margin-top: 30px;\">\n\n    <div class=\"form-group\">\n      <label for=\"employeeId\">Employee Id :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeId\" name=\"employeeId\" [(ngModel)]=\"formRecord.employeeId\"\n        placeholder=\"Employee Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"employeeName\">Employee Name :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeName\" name=\"employeeName\" [(ngModel)]=\"formRecord.employeeName\"\n        placeholder=\"Employee Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"employeeType\">Employee Type :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeType\" name=\"employeeType\" [(ngModel)]=\"formRecord.employeeType\"\n        placeholder=\"Employee Type\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"employeeAdress\">Employee Address :</label>\n      <input type=\"text\" class=\"form-control\" id=\"employeeAdress\" name=\"employeeAdress\" [(ngModel)]=\"formRecord.employeeAdress\"\n        placeholder=\"Employee Adress\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\" (click)=\"saveEmployee()\">Submit</button>\n  </form>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee-service.service */ "./src/app/employee-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_companyService, _router, myroute) {
        this._companyService = _companyService;
        this._router = _router;
        this.myroute = myroute;
        this.formRecord = {};
    }
    EmployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        console.log("this is formData");
        // console.log(this.formRecord);
        this._companyService.saveNewEmployee(this.formRecord).subscribe(function (data) {
            if (data) {
                // console.log(data + " tt")
                //this._router.navigateByUrl('companyDetails');
                _this._router.navigate(['/employeeDetails']);
            }
        });
    };
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_employee_service_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\CompanyProject\companyProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map