import { Col, Container, Form, Row } from "react-bootstrap"
import "./index.css"

import { ButtonComponent } from "../../../../component/common/button.component";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Divider, Title } from "../../../../component/common/heading.component";


const ForgetPassword = ()=>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [data,setData]=useState()
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const handleSubmits=(e)=>{
        e.preventDefault()
        //TODO API CALL
        try{
            toast.success("An email with the instruction has been sent to your registered email.",{
                theme:"colored"
            })
          
        }catch(exception){
            toast.error("Sorry! Your request cannot be processed at this moment!!")
            
        }
    }
    const forgetSubmit=(data)=>{
        console.log(data)
    }
    return(<>
    
    <Container className="login-wrapper m-5">
        <Row>
            <Col sm={12} md={{offset:3,span:6}}>
                <Title>Forget Password</Title>
            <p className="text-center"><em>Please use the registered email for reset.You will receive an email for the resetting your password.Follow the instruction from the email.</em>
            </p>
            </Col>
        </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:3,span:6}}>
            <Form onSubmit={forgetSubmit(handleSubmit)}>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Username: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" name="email" size="sm" 
                        onChange={handleChange}
                        {...register("email",{required:true})}
                        placeholder="Enter your Username">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col>
                </Form.Group>
               
                <Form.Group className="row mb-3">
                   <Col sm={{offset:3,span:9}}>
                   <ButtonComponent className="btn-danger me-3" type="reset" label="Cancel"></ButtonComponent>
                    <ButtonComponent className="btn-success" type="submit" label="Submit"></ButtonComponent>
                    
                    
                    </Col>
                </Form.Group>
            </Form>
           <a href="/login"> Login</a>&nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;&nbsp;<a href="/register">Create an Account</a>
           </Col>
        </Row>        
    </Container>
    </>
    )
}
export default ForgetPassword;