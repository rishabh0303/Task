import React ,{useState,useRef,useEffect} from "react";

import Swal from 'sweetalert2';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Add = ({ employees, setEmployees, setIsAdding }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const textInput=useRef(null);
    useEffect(()=>{
        textInput.current.focus();
    },[])
    const handleAdd=(e)=>{
        e.preventDefault();
        if (!firstName || !lastName || !address || !date || !mobile) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
    }
    const id=employees.length+1;
    const newEmployee={
        id,
        firstName,
        lastName,
        address,
        date,
        mobile,
        city,
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);
    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${firstName} ${lastName}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500
    })

    }
  return (
    <div className="container mt-3">
      <Form>
        <Form.Group className="mb-3  col-lg-6" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            ref={textInput}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
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
            placeholder="Last Name"
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
            placeholder="Address"
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
            placeholder="DOB"
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
            placeholder="Mobile No."
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
            placeholder="City"
          />
        </Form.Group>
        <div style={{ marginTop: '30px' }}>
                    <Button type="submit" onClick={handleAdd}>Add</Button>
                    <Button variant="secondary"
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    >Cancel</Button>
                </div>
      </Form>
    </div>
  );
}

export default Add
