import React, { useEffect } from 'react'
import Swal from "sweetalert2"
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom"
import { employeesData } from '../data';
import Add from './Add';
import Edit from './Edit';
import EmployeeHeader from './EmployeeHeader';

import List from './List';
const Details = () => {
 const[loginData,setLoginData]=useState([]);
 const[employees,setEmployees]=useState(employeesData);
 const[selectedEmployee,setSelectedEmployee]=useState(null);
 const[isAdding,setIsAdding]=useState(false);
 const[isEditing,setIsEditing]=useState(false);
 const history=useNavigate();
 const validation=()=>{
    const getUser=localStorage.getItem("user_login");
    if(getUser && getUser.length){
        const user=JSON.parse(getUser);
        setLoginData(user);
    }
 }
 const adminLogout=()=>{
    localStorage.removeItem("user_login");
    history("/");
 }
 const handleEdit=(id)=>{
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);

 }
 const handleDelete=(id)=>{
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then(result => {
        if (result.value) {
            const [employee] = employees.filter(employee => employee.id === id);

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
            });

            setEmployees(employees.filter(employee => employee.id !== id));
        }
    });
 
 }
 useEffect(()=>{
    validation();
 },[])

  return (
    <div>
        {/* {
            loginData.length===0 ? "error" :
            <>
            <h1>Employee Details</h1>
            
            </>
            
        } */}
        {
            
            !isAdding && !isEditing && (
                <>
                <EmployeeHeader
                
                setIsAdding={setIsAdding}/>
                <List
                employees={employees}
                handleEdit={handleEdit}
                handleDelete={handleDelete}/>
                
               
                </>
                
            )
        }
        {/* For Adding */}
        {
            isAdding && (
                <Add
                employees={employees}
                setEmployees={setEmployees}
                setIsAdding={setIsAdding}/>
            )
        }
        {/* for editing employee details*/}
        {
            isEditing && (
                <Edit
                employees={employees}
                selectedEmployee={selectedEmployee}
                setEmployees={setEmployees}
                setIsEditing={setIsEditing}/>
            )
        }
    </div>
  )
}

export default Details