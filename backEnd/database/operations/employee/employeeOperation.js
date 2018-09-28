let employeeModel = require('../../model/employee/employeeModel');
let Promise = require('promise');

/*
*This is the operation file for saving the Employee details
 */
let saveNewEmployee = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let saveemployee = employeeModel(parameter);
            saveemployee.save()
                .then(function (data) {
                    if (data) {
                        resolve(data);
                    }
                });
        }
    });
};


let fetchEmployeeDetails = () => {
    return new Promise((resolve, reject) => {
        employeeModel.find()
            .exec()
            .then((EmployeeDetailsFromDB) => {
                if (EmployeeDetailsFromDB) {
                    resolve(EmployeeDetailsFromDB);
                }
            });
    });
};

let deleteOneEmployeeDetails = (id) => {
    return new Promise((resolve, reject) => {
        employeeModel.findByIdAndRemove(id)
            .then((data) => {
                console.log('data in operation file');
                console.log(data);
                if (data) {
                    resolve(data);
                }
            });
    });
};
let updateOneEmployeeDetails = (id,parameter) => {
    return new Promise((resolve, reject) => {
        employeeModel.findByIdAndUpdate(id,{$set:parameter})
            .exec()
            .then((EmployeeDetailsFromDB) => {
                if (EmployeeDetailsFromDB) {
                    resolve(EmployeeDetailsFromDB);
                }
            });
    });
};


module.exports = {
    saveNewEmployee: saveNewEmployee,
    fetchEmployeeDetails: fetchEmployeeDetails,
    updateOneEmployeeDetails:updateOneEmployeeDetails,
   deleteOneEmployeeDetails:deleteOneEmployeeDetails

}