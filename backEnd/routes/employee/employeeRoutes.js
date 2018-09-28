let express = require('express');
let router = express.Router();
let employeeController = require('../../controller/employee/employeeController');


/**
 * This is the Route for saving the Employee details
 */
router.post('/saveNewEmployee', function (req, res) {

    console.log(req.body)
    let employeeName = req.body.employeeName;
    let employeeId = req.body.employeeId;
    let employeeAdress = req.body.employeeAdress;
    let employeeType = req.body.employeeType;

    if (employeeName && employeeId) {
        let record = {
            employee_id: employeeId,
            employee_name: employeeName,
            employee_adress: employeeAdress,
            employee_type: employeeType,
        }
        employeeController.saveEmployee(record).then(function (savedData) {
            if (savedData) {
                res.send({ success: true, MSG: "Employee Data is Saved Successfully", data: savedData })
            } else {
                res.send({ success: false, MSG: "Employee Data is Not Saved" })
            }
        });
    }
});

/**
 * This is the Route for Fetching the Employee details
 */
router.get('/completeEmployeeDetails', function (req, res) {
    employeeController.completeEmployeeDetails().then(function (ResultData) {
        if (ResultData) {
            res.send({ success: true, MSG: 'Complete Employee Details is Found', data: ResultData })
        } else {
            res.send({ success: false, MSG: 'Employee Details Not Found' })
        }
    });
});

/*
  This is the route for deleting vompany
*/

router.post('/deleteOneEmployee', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

    let id = req.body.params;
    employeeController.deleteOneEmployee(id).then(function (ResultData) {
        res.send({ success: true, MSG: 'Complete Employee Details Deleted', employeeData: ResultData })
    });
});

router.post('/updateOneEmployee', function (req, res) {
    console.log(req.body);
    let id = req.body._id;
    let employeeObject = {
        employee_name: req.body.employee_name,
        employee_id: req.body.employee_id,
        employee_adress: req.body.employee_adress,
        employee_type: req.body.employee_type
    }
    employeeController.updateOneEmployee(id, employeeObject).then(function (ResultData) {
        if (ResultData) {
            res.send({ success: true, MSG: 'Success', data: ResultData })
        } else {
            res.send({ success: false, MSG: 'Employee Details Not Found' })
        }
    });
});

module.exports = router;