var supplier=require('../models/supplier_model');
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    supplier.getAllSuppliers(function(err,rows){
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

module.exports=router;