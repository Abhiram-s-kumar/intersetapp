import React from 'react'
import myStyle from './style.module.css'

const Company = () => { 
  const allEmp = [
    {empName : "Max Miller" , empDesg: "Developer" ,salary :"35000"},
    {empName : "Milind sonman" , empDesg: "Developer" ,salary :"65000"},
    {empName : "Mihir bajaj" , empDesg: "Developer" ,salary :"355000"},
    {empName : "mahi bhatia" , empDesg: "Developer" ,salary :"35000"},
  ]
  return (
    <div>
      <h3>company</h3>

      <h1 className={myStyle.headStyle}>.All Employee List.</h1>
      <table className="table container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
           {
            allEmp.map((emp,index)=>(   
            <tr key={emp.empName}>
              <td>{index+1}</td>
              <td>{emp.empName}</td>
              <td>{emp.empDesg}</td>
              <td>{emp.empSalary}</td>
            </tr>))
           }
        </tbody>
      </table>
    </div>
  )
}

export default Company
