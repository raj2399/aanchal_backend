var db=require('../dbconnection');
var product={
    getAllProducts:function(callback)
    {
       return db.query("select * from Product_tbl",callback);
    },
    addProduct:function(item,filename,callback)
    {
        return db.query("insert into Product_tbl (Product_name,Product_desc,Fk_category_id,Product_price,Product_image) values(?,?,?,?,?)",[item.Product_name,item.Product_desc,item.Fk_category_id,item.Product_price,filename],callback);
    },
    deleteAll:function(item,callback){
 
        var delarr=[];
        for(i=0;i<item.length;i++){
         
        delarr[i]=item[i].Product_id;
        }
         db.query("delete from Product_tbl where Product_id in (?)",[delarr]);
        return db.query( "delete from stock_tbl where Fk_product_id in (?)",[delarr],callback);
        }

};
module.exports=product;