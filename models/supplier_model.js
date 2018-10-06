var db=require('../dbconnection');
var supplier={
    getAllSuppliers:function(callback)
    {
       return db.query("select * from Supplier_tbl",callback);
    },
    addSupplier:function(item,callback)
    {
        return db.query("insert into Supplier_tbl (Email_id,Name,Address,Password,Mobile_no) values(?,?,?,?,?)",[item.Email_id,item.Name,item.Address,item.Password,item.Mobile_no],callback);
    },
    deleteAll:function(item,callback){
 
        var supplier_delarr=[];
        for(i=0;i<item.length;i++){
         
        supplier_delarr[i]=item[i].Supplier_id;
        }
        
        return db.query( "delete from Supplier_tbl where Supplier_id in (?)",[supplier_delarr],callback);
      },
      deleteSupplier:function(id,callback){
        return db.query("delete from Supplier_tbl where Supplier_id=?",[id],callback);    
   }
  

    
};
module.exports=supplier;