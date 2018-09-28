let Promise = require('promise');
let employeeOperation = require('../../database/operations/employee/employeeOperation')

/*
*This is the controller save function,This we use for saving the employee record
*/
let saveEmployee = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            employeeOperation.saveNewEmployee(parameter).then(function (dataFetchInController) {
                if (dataFetchInController) {
                    resolve(dataFetchInController);
                }
            });
        }
    });

};

let completeEmployeeDetails = () => {
    return new Promise((resolve, reject) => {
        employeeOperation.fetchEmployeeDetails().then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
};

let deleteOneEmployee = (id) => {
    return new Promise((resolve, reject) => {
        employeeOperation.deleteOneEmployeeDetails(id).then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
};


let updateOneEmployee = (id,parameter) => {
    return new Promise((resolve, reject) => {
        employeeOperation.updateOneEmployeeDetails(id,parameter).then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
};

module.exports = {
    saveEmployee: saveEmployee,
    completeEmployeeDetails: completeEmployeeDetails,
   deleteOneEmployee:deleteOneEmployee,
    updateOneEmployee:updateOneEmployee
}