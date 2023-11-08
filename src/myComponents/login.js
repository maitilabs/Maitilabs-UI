import React from "react";
import Img from '../img/key_2170153.png';
import Img2 from '../img/login_95461.png';
import { Form, FormGroup, Container, Button, Input, Card, CardBody } from 'reactstrap';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


import { useState, useEffect } from 'react';


function Login({ isUserLoggedIn, setIsUserLoggedIn } ) {
  
const [token, setToken] = useState(null);

// Load token from local storage on initial render
useEffect(() => {
  const storedToken = localStorage.getItem('authToken');
  if (storedToken) {
    setToken(storedToken);
    setIsUserLoggedIn(true);
  }
}, [setIsUserLoggedIn]);

// Function to set the token in both state and local storage
const login = (newToken) => {
  setToken(newToken);
  localStorage.setItem('authToken', newToken);
  setIsUserLoggedIn(true);
};



    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
      
        const queryParams = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
      
        try {
          const response = await axios.post(process.env.REACT_APP_API_URL+'/api/login', queryParams);
          console.log(response.data);
          if (response.data.msg === "login success") {
            login(`Bearer ${response.data.token}`);
            
           
            // Redirect to the dashboard route
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Logged in Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/'); 
          } else {
            // Handle other cases, e.g., show an error message
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Something Went Wrong!!! Try Again.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        } catch (error) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something Went Wrong!!! Try Again.',
            showConfirmButton: false,
            timer: 1500
          })
        }
      };
      
    return (
        <div style={{marginLeft:450,marginTop:20}}>
            <Container>
                <Card style={{width:400,borderRadius:20,height:450,border:"1px solid #ccc"}}>
                    <CardBody>
                        <div classNameName="d-flex justify-content-center align-items-cente">
                            <img classNameName="img-fluid" src={Img} alt="content not found" style={{height:"15vh",width:"15vh"}} /><br></br>
                        </div>
                        <div classNameName="d-flex justify-content-center align-items-center">
                        <img classNameName="img-fluid" src={Img2} alt="content not found" style={{height:"15vh",width:"15vh"}} />
                        </div>
                        <Form onSubmit={handleLogin}>
                            <FormGroup>
                                <label> Email </label>
                                <Input type="email" placeholder="Enter Your Email" id="email" style={{ borderColor: "grey" }} />
                            </FormGroup>
                            <FormGroup>
                                <label> Password </label>
                                <Input type="password" placeholder="Enter Your password" id="password" style={{ borderColor: "grey" }} />
                            </FormGroup>
                            <Container>
                                <Button type="submit" classNameName="primary" >Login</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}; 
export default Login;