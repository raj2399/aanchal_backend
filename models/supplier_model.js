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
   },
   updateSupplier:function(item,Supplier_id,callback){
    return db.query("update Supplier_tbl set / Email_id=?,Name=?,Address=?,Password=?,Mobile_no=? where Supplier_id=?",[item.Email_id,item.Name,item.Address,item.Password,item.Mobile_no,Supplier_id],callback);
    },
    getsupplierById:function(Supplier_id,callback){
        return db.query("select * from Supplier_tbl where Supplier_id=?",[Supplier_id],callback);
    }
  

    
};
module.exports=supplier;