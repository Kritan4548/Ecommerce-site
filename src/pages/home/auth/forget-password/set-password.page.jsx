import React from "react";
import { Container,Form,Row,Col } from "react-bootstrap"

import { Divider, Title } from "../../../../component/common/heading.component";
import PasswordSetComponent from "../../../../component/home/auth/password-set.component";





 const  SetPasswordPage =()=>{
    

    const submitEvent =(data)=>{
        console.log(data)
    }
    return (
       
        <>
         <Container className="login-wrapper my-5">
    <Row>
        <Col sm={12} md={{offset:3,span:6}}>
            <Title>Set Password Page</Title>
        </Col>
    </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:3,span:6}}>
           <PasswordSetComponent  submitEvent={submitEvent}/>
        </Col>
    </Row>
    
  </Container>
        
        </>
    )
}
export default SetPasswordPage;
