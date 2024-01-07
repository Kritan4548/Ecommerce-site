
import { Col, Container, Form, Row } from "react-bootstrap";
import HomeHeader from "../../../../component/home/header/home-header.component";
import styled from "styled-components";
import "./index.css"
import { ButtonComponent } from "../../../../component/common/button.component";
import { useForm } from "react-hook-form";
import { Title,Divider } from "../../../../component/common/heading.component";


const LoginPage = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const loginSubmit =(data)=>{
        console.log(data)
    }
    return(
  <>
 
  <Container className="login-wrapper my-5">
    <Row>
        <Col sm={12} md={{offset:3,span:6}}>
            <Title>Login Page</Title>
        </Col>
    </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:3,span:6}}>
            <Form onSubmit={handleSubmit(loginSubmit)}>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Username: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" size="sm"
                        {...register("email",{required:true})}
                        placeholder="Enter your Username">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em>{errors.email ? "Email is required" : ""}</em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Password:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password" size="sm" 
                            {...register("password",{required:true})}
                         placeholder="Enter your Password">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                   <Col sm={{offset:3,span:9}}>
                    Or&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/forget-password">Forget Password?</a>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                   <Col sm={{offset:3,span:9}}>
                    <ButtonComponent className="btn-danger me-3" type="reset" label="Cancel"></ButtonComponent>
                    <ButtonComponent className="btn-success" type="submit" label="Login"></ButtonComponent>
                    </Col>
                </Form.Group>
            </Form>
            Or&nbsp;&nbsp;&nbsp;&nbsp;<a href="/register">Create an Account</a>
        </Col>
    </Row>
    
  </Container>
        </>
    )
    
}
 export default LoginPage;