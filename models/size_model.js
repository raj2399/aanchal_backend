var db=require('../dbconnection');
var size={
    getAllSizes:function(callback)
    {
       return db.query("select * from Size_tbl",callback);
    }
};
module.exports=size;
    