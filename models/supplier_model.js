var db=require('../dbconnection');
var supplier={
    getAllSuppliers:function(callback)
    {
       return db.query("select * from Supplier_tbl",callback);
    },
};
module.exports=supplier;