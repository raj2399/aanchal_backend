var stock=require('../models/stock_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    stock.getAllStock(function(err,rows){
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
    stock.addStock(req.body,function(err,rows){
        
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