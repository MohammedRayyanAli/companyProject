let companyModel = require('../../model/company/companyModel');
let Promise = require('promise');

/*
*This is the operation file for saving the Company details
 */
let saveNewCompany = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let savecompany = companyModel(parameter);
            savecompany.save()
                .then(function (data) {
                    if (data) {
                        resolve(data);
                    }
                });
        }
    });
};


let fetchCompanyDetails = () => {
    return new Promise((resolve, reject) => {
        companyModel.find()
            .exec()
            .then((CompanyDetailsFromDB) => {
                if (CompanyDetailsFromDB) {
                    resolve(CompanyDetailsFromDB);
                }
            });
    });
};

let deleteOneCompanyDetails = (id) => {
    return new Promise((resolve, reject) => {
        companyModel.findByIdAndRemove(id)
            .then((data) => {
                console.log('data in operation file');
                console.log(data);
                if (data) {
                    resolve(data);
                }
            });
    });
};
let updateOneCompanyDetails = (id,parameter) => {
    return new Promise((resolve, reject) => {
        companyModel.findByIdAndUpdate(id,{$set:parameter})
            .exec()
            .then((CompanyDetailsFromDB) => {
                if (CompanyDetailsFromDB) {
                    resolve(CompanyDetailsFromDB);
                }
            });
    });
};


module.exports = {
    saveNewCompany: saveNewCompany,
    fetchCompanyDetails: fetchCompanyDetails,
    updateOneCompanyDetails:updateOneCompanyDetails,
   deleteOneCompanyDetails:deleteOneCompanyDetails

}
