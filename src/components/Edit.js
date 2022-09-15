import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2"
import Button from "react-bootstrap/Button";
const Edit = ({employees,selectedEmployee,setEmployees,setIsEditing}) => {
    const id=selectedEmployee.id;
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [address, setAddress] = useState(selectedEmployee.address)
    const [date, setDate] = useState(selectedEmployee.date);
    const [mobile, setMobile] = useState(selectedEmployee.mobile);
    const [city, setCity] = useState(selectedEmployee.city);

    const handleUpdate=(e)=>{
        e.preventDefault();

        if (!firstName || !lastName || !address || !date || !mobile || !city){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required!.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            address,
            date,
            mobile,
            city
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
  return (
    <div className="container">
        <h1>Update Employee Details</h1>
        <Form>
        <Form.Group className="mb-3  col-lg-6" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control
            type="number"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            
          />
        </Form.Group>
        <div style={{ marginTop: '30px' }}>
                    <Button  onClick={handleUpdate}>Update</Button>
                    <Button variant="secondary"
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    >Cancel</Button>
                    
                </div>
        </Form>

    </div>
  )
}

export default Edit