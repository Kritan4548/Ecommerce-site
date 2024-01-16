import React, { useEffect, useState } from "react";
import { Container,Row,Col, Spinner } from "react-bootstrap"

import { Divider, Title } from "../../../../component/common/heading.component";
import PasswordSetComponent from "../../../../component/home/auth/password-set.component";
import { useNavigate, useParams } from "react-router-dom";
import authSvc from "../auth.service";
import { toast } from "react-toastify";





 const  SetPasswordPage =()=>{
    const params=useParams()
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()

    const verifyToken = async ()=>{
        try{
            const verified= await authSvc.getActivationTokenVerify(params.token)
            setLoading(false)
        }catch(exception){
            console.log('exception',exception)
            toast.error(exception.message)
            navigate('/login')
        }
    }
    useEffect(()=>{
        verifyToken()
    },[params])

    const submitEvent =async(data)=>{
        try{
            let response= await authSvc.activateUser(params.token,data)
            toast.success(response.message)
            navigate("/login")
        }catch(exception){
            toast.error(exception.message)
            navigate("/")

        }
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
            {
                (loading) ? <>
                <div className="text-center">
                <Spinner variant="dark" /></div>
                </> :<PasswordSetComponent  submitEvent={submitEvent}/>
            }
           
        </Col>
    </Row>
    
  </Container>
        
        </>
    )
}
export default SetPasswordPage;
