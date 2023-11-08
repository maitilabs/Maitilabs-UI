import React from 'react';
import Img from '../img/key_2170153.png';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';

import { Form, FormGroup, Container, Button, Input, Card, CardBody } from 'reactstrap';
function OTP(){
    const navigate = useNavigate();
    const location = useLocation();
    const name= location.state.name;
    const email = location.state.email;
    const password = location.state.password;
    const phonee= location.state.phone;
    console.log(email);
    const handleOtp = async (e) => {
        e.preventDefault();
          console.log(e.target.otp.value)  ;
        const OtpParams = {
            name:name,
            email:email,
            password:password,
            phone:phonee,
            otp: e.target.otp.value,
          };
          
          try{
          
            const response= await axios.post("https://maitilabs-ojaz.vercel.app/api/signup/verify",OtpParams, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

              console.log(response);
              if(response.status===200){
                  alert("registration successful");
                    setTimeout(() => {
                navigate('/login')
             }, 1)
              }   
            }
            
        catch(err){
        console.log(err);
        }
      }
    
    return(
        <div style={{marginLeft:450,marginTop:20}}>
            <Container>
                <Card style={{width:400,borderRadius:20,height:450,border:"1px solid #ccc"}}>
                    <CardBody>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="img-fluid" src={Img} alt="content not found" style={{height:"15vh",width:"15vh", alignItems:'center' }} /><br></br>
                        </div>
                        <div className="text-center">
                        </div>
                        <Form onSubmit={handleOtp}>
                            <FormGroup>
                                <label>Enter OTP</label>
                                <Input name="otp" type="text" placeholder="Enter Your OTP" id="otp" style={{ borderColor: "grey" }} />
                            </FormGroup>
                            <Container>
                                <Button type="submit" className="primary" >Submit</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
export default OTP;