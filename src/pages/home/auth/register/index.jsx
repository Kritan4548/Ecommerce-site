import { Col, Container, Form, Row } from "react-bootstrap";
import "./index.css"
import HomeHeader from "../../../../component/home/header/home-header.component";
import styled from "styled-components";
import { ButtonComponent } from "../../../../component/common/button.component";
import { useForm } from "react-hook-form";

const LoginTitle =styled.h1`
color:#001900;
text-align:center;
`
const Divider=styled.hr`
border-color:#001900
`
const RegisterPage = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const registerSubmit=(data)=>{
        console.log(data)
    }
    return(
  <>
  
  <Container className="register-wrapper m-5">
    <Row>
        <Col sm={12} md={{offset:3,span:6}}>
            <LoginTitle>Register</LoginTitle>
        </Col>
    </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:3,span:6}}>
            <Form onSubmit={handleSubmit(registerSubmit)}> 
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">First Name</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="string" size="sm" {...register("string",{required:true})} placeholder="Enter your First Name">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Last Name</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="string" size="sm" required placeholder="Enter your Last Name">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Username</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" size="sm" required placeholder="Enter your Username">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Password</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password" size="sm" required placeholder="Enter your Password">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Confirm Password</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password" size="sm" required placeholder="Enter your Confirm Password">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                
                <Form.Group className="row mb-3">
                   <Col sm={{offset:3,span:9}}>
                    <ButtonComponent className="btn-danger me-3" type="cancel" label="Cancel"></ButtonComponent>
                    <ButtonComponent className="btn-success" type="submit" label="Submit"></ButtonComponent>
                    </Col>
                </Form.Group>
            </Form>
        </Col>
    </Row> 
</Container>  
</>)
}
export default RegisterPage;