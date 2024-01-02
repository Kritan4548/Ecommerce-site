
import { Col, Container, Form, Row } from "react-bootstrap";
import HomeHeader from "../../../../component/home/header/home-header.component";
import styled from "styled-components";
import "./index.css"
import { ButtonComponent } from "../../../../component/common/button.component";


const LoginTitle =styled.h1`
color:#001900;
text-align:center;
`
const Divider=styled.hr`
border-color:#001900
`
const LoginPage = () => {
    return(
  <>
 
  <Container className="login-wrapper my-5">
    <Row>
        <Col sm={12} md={{offset:3,span:6}}>
            <LoginTitle>Login Page</LoginTitle>
        </Col>
    </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:3,span:6}}>
            <Form>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Username: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" size="sm" required placeholder="Enter your Username">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Password:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password" size="sm" required placeholder="Enter your Password">
                             
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