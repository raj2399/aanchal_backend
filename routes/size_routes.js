var size=require('../models/size_model');
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    size.getAllSizes(function(err,rows){
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