let Promise = require('promise');
let companyOperation = require('../../database/operations/company/companyOperation')

/*
*This is the controller save function,This we use for saving the company record
*/
let saveCompany = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            companyOperation.saveNewCompany(parameter).then(function (dataFetchInController) {
                if (dataFetchInController) {
                    resolve(dataFetchInController);
                }
            });
        }
    });

};

let completeCompanyDetails = () => {
    return new Promise((resolve, reject) => {
        companyOperation.fetchCompanyDetails().then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
};

let deleteOneCompany = (id) => {
    return new Promise((resolve, reject) => {
        companyOperation.deleteOneCompanyDetails(id).then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
};


let updateOneCompany = (id,parameter) => {
    return new Promise((resolve, reject) => {
        companyOperation.updateOneCompanyDetails(id,parameter).then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
};

module.exports = {
    saveCompany: saveCompany,
    completeCompanyDetails: completeCompanyDetails,
   deleteOneCompany:deleteOneCompany,
    updateOneCompany:updateOneCompany
}