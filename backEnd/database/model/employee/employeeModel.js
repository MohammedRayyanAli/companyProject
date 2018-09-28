let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let newEmployeeSchema = Schema({

    employee_id:{
        type:String,
        required:true
    },
    employee_name:{
        type:String,
        required:true
    },
    employee_adress:{
        type:String,
        required:false
    },
    employee_type:{
        type:String,
        required:true
    }
    
});

let Employee = module.exports = mongoose.model('Employee',newEmployeeSchema);