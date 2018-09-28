let express = require('express');
let router = express.Router();
let companyController = require('../../controller/company/companyController')


/**
 * This is the Route for saving the company details
 */
router.post('/saveNewCompany', function (req, res) {

    console.log(req.body)
    let companyName = req.body.companyName;
    let companyId = req.body.companyId;
    let companyAdress = req.body.companyAdress;
    let companyType = req.body.companyType;

    if (companyName && companyId) {
        let record = {
            company_id: companyId,
            company_name: companyName,
            company_adress: companyAdress,
            company_type: companyType,
        }
        companyController.saveCompany(record).then(function (savedData) {
            if (savedData) {
                res.send({ success: true, MSG: "Company Data is Saved Successfully", data: savedData })
            } else {
                res.send({ success: false, MSG: "Company Data is Not Saved" })
            }
        });
    }
});

/**
 * This is the Route for Fetching the company details
 */
router.get('/completeCompanyDetails', function (req, res) {
    companyController.completeCompanyDetails().then(function (ResultData) {
        if (ResultData) {
            res.send({ success: true, MSG: 'Complete Company Details is Found', data: ResultData })
        } else {
            res.send({ success: false, MSG: 'Company Details Not Found' })
        }
    });
});

/*
  This is the route for deleting vompany
*/

router.post('/deleteOneCompany', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

    let id = req.body.params;
    companyController.deleteOneCompany(id).then(function (ResultData) {
        res.send({ success: true, MSG: 'Complete Company Details Deleted', companyData: ResultData })
    });
});

router.post('/updateOneCompany', function (req, res) {
    console.log(req.body);
    let id = req.body._id;
    let companyObject = {
        company_name: req.body.company_name,
        company_id: req.body.company_id,
        company_adress: req.body.company_adress,
        company_type: req.body.company_type
    }
    companyController.updateOneCompany(id, companyObject).then(function (ResultData) {
        if (ResultData) {
            res.send({ success: true, MSG: 'Success', data: ResultData })
        } else {
            res.send({ success: false, MSG: 'Company Details Not Found' })
        }
    });
});

module.exports = router;