
import React from 'react'
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom"


const EmployeeHeader = ({setIsAdding}) => {
    const adminLogout=()=>{
        localStorage.removeItem("user_login");
        history("/");
     }
     const history=useNavigate();
  return (
    <header>
        <h1>Employee Details</h1>
        <div style={{marginTop:"30px",marginBottom:"18px"}}>
            <Button  style={{marginLeft:"20px"}} onClick={adminLogout}>Logout</Button>
            <Button style={{marginLeft:"150vh"}} onClick={()=>setIsAdding(true)} className="btn">Add Employee</Button>
        </div>
    </header>
  )
}

export default EmployeeHeader