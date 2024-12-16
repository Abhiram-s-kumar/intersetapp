import './Employee.css'
function Employee(props){
    console.log(props);
    
    return (
        <div>
            <h1>
                Employee Details 
            </h1>
            <h2 className="head">Employee Name : <span className='headColor' >{props.dataFromParent}</span></h2>
            <h2>Employee Designaation : <span className="text-danger">{props.empDesg}</span></h2>
            <h2>Employee Status : { props.empStatus ? <span className="text-success">Active</span>  : <span className="text-danger">inactive</span> }</h2>
            <h2>Employee Salary: <span className="text-danger">{props.empSalary}</span></h2>
        </div>
      
    )
}
export default Employee