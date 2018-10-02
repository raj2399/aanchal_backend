var db=require('../dbconnection');
var color={
    getAllColors:function(callback)
    {
       return db.query("select * from Color_tbl",callback);
    }
};
module.exports=color;
    