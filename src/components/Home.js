import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [inpData, setInputData] = useState({
    email: "",
    Fname: "",
    Lname: "",
    password: "",
    address: "",
    date: "",
    company: "",
  });
  // console.log(inpData);
  const getData = (e) => {
    const { value, name } = e.target;
    setInputData(() => {
      return {
        ...inpData,
        [name]: value,
      };
    });
  };
  const submitData = (e) => {
    e.preventDefault();

    const { email, Fname, Lname, password, address, company } = inpData;
    if (email == "") {
      alert("Email field is required!");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address!");
    } else if (Fname === "") {
      alert("First Name field is required!");
    } else if (Lname === "") {
      alert("Last Name field is required!");
    } else if (password === "") {
      alert("Password field is required!");
    } else if (password.length < 5) {
      alert("Password length must be greater than 5!");
    } else if (address === "") {
      alert("Address field is required!");
    } else if (company === "") {
      alert("Company name is required!");
    } else {
      console.log("data added");
      localStorage.setItem("valid", JSON.stringify([...data, inpData]));
    }
  };

  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="leftData mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign Up</h3>

          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getData}
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="Fname"
                onChange={getData}
                placeholder="First Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="Lname"
                onChange={getData}
                placeholder="Last Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={getData}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="address"
                onChange={getData}
                placeholder="Address"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="date"
                name="date"
                onChange={getData}
                placeholder="DOB"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="company"
                onChange={getData}
                placeholder="Company"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              className="col-lg-6"
              onClick={submitData}
              style={{ backgroundColor: "rgb(67,185,127)" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account?{" "}
            <span>
              <NavLink to="/login">Sign In</NavLink>
            </span>
          </p>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};

export default Home;
