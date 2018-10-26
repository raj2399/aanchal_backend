var db=require('../dbconnection');

var employee={
    getAllemployees:function(callback)
    {
       return db.query("select * from employee_tbl",callback);    
    },
    addEmployee:function(item,callback)
    {
                return db.query("insert into employee_tbl  values (?,?,?,?,?,?,?,?,?)",[item.Email_id,item.Password,item.Name,item.Mobile_no,item.Address,item.DOB,item.Salary,item.Joining_date,item.Employee_type],callback);
    }
};
module.exports=employee;
    