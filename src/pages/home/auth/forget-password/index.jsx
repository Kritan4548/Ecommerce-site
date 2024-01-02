import { Col, Container, Form, Row } from "react-bootstrap"
import "./index.css"
import styled from "styled-components";
import HomeHeader from "../../../../component/home/header/home-header.component";
import { ButtonComponent } from "../../../../component/common/button.component";

const LoginTitle =styled.h1`
color:#001900;
text-align:center;
`
const Divider=styled.hr`
border-color:#001900
`
const ForgetPassword = ()=>{
    return(<>
    <HomeHeader />
    <Container className="login-wrapper m-5">
        <Row>
            <Col sm={12} md={{offset:3,span:6}}>
                <LoginTitle>Forget Password</LoginTitle>
            </Col>
        </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:3,span:6}}>
            <Form>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Password</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="password" size="sm" required placeholder="Enter your New Password">
                             
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
                    <ButtonComponent className="btn-success me-3" type="forget" label="Proceed"></ButtonComponent>
                    
                    </Col>
                </Form.Group>
            </Form>
           </Col>
        </Row>        
    </Container>
    </>
    )
}
export default ForgetPassword;