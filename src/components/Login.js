import  {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import {NavLink, useNavigate} from "react-router-dom"
const Login = () => {

    const history=useNavigate();
    const [data,setData]=useState([]);
    const[inpData,setInputData]=useState({
        email:"",
       
        password:"",
        
       
    });
    // console.log(inpData);
    const getData=(e)=>{
        
        const {value,name}=e.target;
        setInputData(()=>{
            return {
                ...inpData,
                [name]:value
            }
        })
    }
    const submitData=(e)=>{
        e.preventDefault();
        const getuserArr=localStorage.getItem("valid");
        console.log(getuserArr);

        const {email,password}=inpData;
        if(email==="")
        {
            alert("Email field is required!");
        }
        else if(!email.includes("@"))
        {
            alert("Please enter a valid email address!");
        }
        else if(password==="")
        {
            alert("Password field is required!");
        }
        else if(password.length<5)
        {
            alert("Password length must be greater than 5!");
        }
        else{
            if(getuserArr && getuserArr.length)
            {
                const userData=JSON.parse(getuserArr);
                console.log(userData);
                const userLogin=userData.filter((ele,i)=>{
                    return ele.email === email && ele.password ===password
                });
                if(userLogin === 0)
                {
                    alert("Invalid email id or password!")
                }else{
                    console.log("User logged in successfully");
                    localStorage.setItem("user_login",JSON.stringify(userLogin))
                    history("/details");
                }
            }
        }
    }
  return (
     <div className="container mt-3">
    <section className="d-flex justify-content-between">
      <div className="leftData mt-3 p-3" style={{ width: "100%" }}>
        <h3 className="text-center col-lg-6">Sign In</h3>

        <Form>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Control type="email" name='email' onChange={getData} placeholder="Email" />
          </Form.Group>
         

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
            <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
          </Form.Group>
          
          

          <Button
            variant="primary"
            className="col-lg-6"
            onClick={submitData}
            style={{ backgroundColor: "rgb(67,185,127)" }}
            type="submit"
          >
            Log in
          </Button>
        </Form>
        <p className="mt-3">
            or <br/><span><NavLink to="/">
            <Button style={{ marginLeft:"55px"}}>Create an Account
                </Button></NavLink></span>
        </p>
      </div>
      <Sign_img />
    </section>
  </div>
  )
}

export default Login