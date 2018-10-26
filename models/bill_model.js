var db=require('../dbconnection');
var date=new Date();

var bill={
addBill:function(item,callback)
{
    return db.query('insert into bill_tbl (Bill_date,Total_amount,Fk_c_email_id) values(?,?,?)',[date,item.Total_amount,item.Fk_c_email_id],callback);
},
getBill:function(callback)
{
    return db.query("select * from bill_tbl",callback);
},
addbillser:function(item,callback)
{
    var a=[];
    console.log(item);
    console.log(item.length);
    for(let i=0;i<item.length;i++){
        console.log(item[i]);
        a[i]=[item[i].Fk_bill_id,item[i].Fk_c_email_id,item[i].Fk_product_id,item[i].Quantity,item[i].Amount];  
        console.log(a);  
    }
    console.log(a);
    return db.query("INSERT into bill_details_tbl(Fk_bill_id,Fk_c_email_id,Fk_product_id,Quantity,Amount) values ?",[a],callback);

},
getbillser:function(callback)
{
    return db.query("select * from bill_details_tbl",callback);
}
   
};

module.exports=bill;