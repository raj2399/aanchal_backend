var employee=require('../models/employee_model');
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    employee.getAllemployees(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    employee.addEmployee(req.body,function(err,rows){
        if (err) 
        {
            res.json(err);
            
        } 
        else 
        {  
            //console.log(body);
            res.json(rows);
        }          
    });
});

module.exports=router;