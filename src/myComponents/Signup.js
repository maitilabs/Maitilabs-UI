import React from "react";
import Img from '../img/signupLogo.png';
import { Card, CardBody, Form, FormGroup, Row, Col, Container, Input, Button} from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {

   
      const navigate = useNavigate();
  const handleSubmit=async(e)=>{
   
    e.preventDefault();
      const formData= {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone:  e.target.phone.value
    };

    try{
        const response= await axios.post(process.env.REACT_APP_API_URL+"/api/signup",formData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        console.log(response);
        if(response.status===200){
            alert("SUCCESS")
        }

        if(response.status===400){
            alert('already registered');
        }

        setTimeout(() => {
            navigate('/OTP', {state: {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone: formData.phone
            } });
         }, 1)

    }
    catch(err){
    console.log(err);
    }
  }

 
    return (
        <div>
            <Card>
                <CardBody style={{ marginTop: -15 }}>
                    <Row >
                        <Col md={4}>
                            <img className="img-fluid" style={{ width: 400, height: 300, marginLeft: 120, marginTop: 60 }} src={Img} alt="not found" />
                        </Col>
                        <Col md={8} style={{ width: 550, marginLeft: 150 }}>
                            <div style={{ margin: 10, border: "1px solid #ccc", padding: "10px", borderRadius: 50 }}>
                                <Form onSubmit={handleSubmit}  style={{ margin: 10 }}>
                                    <h5 className="text-center">Signup</h5>
                                    <FormGroup>
                                        <label for="name">Name</label>
                                        <Input type="text" placeholder="Enter Your Name" id="name" name="name" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label for="email">Email</label>
                                        <Input type="email" placeholder="Enter Your Email" id="email" name="email" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label for="password">password</label>
                                        <Input type="password" placeholder="Enter Your password" id="password" name="password" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label for="phone">Phone</label>
                                        <Input type="number" placeholder="Enter Your Phone" id="phone" name="phone" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <Container style={{ marginTop: -10 }} className="text-center">
                                        <Button type="submit" className="btn btn-success" >SignUp</Button>
                                        <Button type="reset" className="btn btn-warning" style={{ margin: 10 }}>Clear</Button>
                                    </Container>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}
export default Signup;
