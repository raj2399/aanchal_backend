var express = require("express");
var router = express.Router();
var bill=require('../models/bill_model');
router.get('/',function(req,res,next){

    bill.getBill(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
});



router.post('/',function(req,res,next){
  bill.addBill(req.body,function(err,rows){
      if (err) {
          res.json(err);
        } else {  
            console.log(rows.insertId);
            res.json(rows);
            
         }          
          
          
        });
        
});

module.exports=router;
