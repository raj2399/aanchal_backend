var db=require('../dbconnection');
var stock={
    getAllStock:function(callback)
    {
        return db.query("select * from Stock_tbl",callback);
    },
    addStock:function(item,callback)
    {
        return db.query("insert into Stock_tbl (Fk_supplier_id,Fk_size_id,Fk_color_id,Fk_product_id,Quantity) values (?,?,?,?,?)",[item.Fk_supplier_id,item.Fk_size_id,item.Fk_color_id,item.Fk_product_id,item.Quantity],callback);
    }
};
module.exports=stock;