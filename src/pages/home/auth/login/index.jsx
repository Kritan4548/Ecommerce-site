
import { Col, Container, Form, Row } from "react-bootstrap";

import "./index.css"
import { ButtonComponent } from "../../../../component/common/button.component";
import { useForm } from "react-hook-form";
import { Title,Divider } from "../../../../component/common/heading.component";
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import authSvc from "../auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
    const navigate=useNavigate()
    const loginSchmea=Yup.object({
        email:Yup.string().email().required(),
        password:Yup.string().required()
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(loginSchmea)
    });
    
    
    const loginSubmit =async (data)=>{
        // console.log(data)
        try{
            let response=await authSvc.loginUser(data)
           const loggedInUser=await authSvc.getLoggedInUser()
           localStorage.setItem("_user",JSON.stringify({
            userId:loggedInUser.result._id,
            name:loggedInUser.result.name,
            role:loggedInUser.result.role
           }))
           toast.success(`${loggedInUser.result.name}!! Welcome to ${loggedInUser.result.role} panel!!`)
            navigate("/"+loggedInUser.result.role)
        }catch(exception){
            
            toast.error(exception.message)

        }
    }


    useEffect(()=>{
        let token=localStorage.getItem('_au')
        let user=JSON.parse(localStorage.getItem("_user"))
        if(token && user){
            toast.info("You are already logged In")
            navigate('/'+user.role)
        }
    },[])
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
                            <em>{errors?.email?.message}</em>
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
                            <em>{errors?.password?.message}</em>
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