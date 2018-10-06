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

router.post('/',function(req,res,next){
    supplier.addSupplier(req.body,function(err,rows){
        if (err) {
            res.json(err);
          } else {  
              //console.log(rows.insertId);
              res.json(rows);
              
           }          
            
            
          });
          
  });
  router.delete('/:id',function(req,res,next){
    supplier.deleteSupplier(req.params.id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
  });
module.exports=router;