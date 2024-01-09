import { Col, Container, Form, Row,Image } from "react-bootstrap";
import "./index.css"

import { ButtonComponent } from "../../../../component/common/button.component";
import { useForm } from "react-hook-form";

import { Divider, Title } from "../../../../component/common/heading.component";
import placeholder from "../../../../assests/images/placeholder.webp"
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import axiosInstance from "../../../../repository/axios.config";
import authSvc from "../auth.service";
const options=[
    {value:'seller', label:"Seller"},
    {value:'customer', label:"Buyer"}
    

    
]

const RegisterPage = () => {
    const [thumb,setThumb]=useState();
    const registerSchmea=Yup.object({
        name:Yup.string().min(2).max(30).required(),
        email:Yup.string().email().required(),
        role:Yup.object({
            value:Yup.string().matches(/customer|seller/),
            label:Yup.string().matches(/Buyer|Seller/)
        }).required()

    })
    const {register,handleSubmit,setValue,setError,formState:{errors}}=useForm({
        resolver:yupResolver(registerSchmea)
    });
    const registerSubmit=async(data)=>{
        try{
            data.role=data.role.value;
        console.log(data)

        const response =await authSvc.registerProcess(data)
        console.log(response)
        toast.success(response.data.msg)
        }catch(exception){
            console.log(exception)
            toast.error(exception.response.data.message)
            exception.response.data.result.map((obj)=>{
                const keys=Object.keys(obj);
                setError(keys[0],obj[keys[0]])
            })
        }
    }
    
    return(
  <>
  
  <Container className="register-wrapper m-5">
    <Row>
        <Col sm={12} md={{offset:3,span:6}}>
            <Title>Register Page</Title>
        </Col>
    </Row>
    <Divider />
    <Row className="my-3 pb-5">
        <Col sm={12} md={{offset:2,span:8}}>
            <Form onSubmit={handleSubmit(registerSubmit)}> 
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Full Name:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" size="sm" {...register("name",{required:true})} 
                        placeholder="Enter your First Name">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em>{errors?.name?.message}</em>
                        </span>
                    </Col>
                </Form.Group>
                
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Email</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" size="sm" {...register("email",{required:true})} placeholder="Enter your Email">
                             
                        </Form.Control>
                        <span className="text-danger">
                            <em>{errors?.email?.message}</em>
                        </span>
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Role:</Form.Label>
                    <Col sm={9}>
                        <Select options={options} 
                        onChange={(e)=>{
                            setValue("role",e)
                        }} />
                       
                        <span className="text-danger">
                            <em>{errors?.role?.message}</em>
                        </span>
                    </Col>
                </Form.Group>
                {/* <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Role</Form.Label>
                    <Col sm={3}>
                        <Form.Check type="radio" label="customer" {...register("role",{required:true})} value={"customer"}placeholder="Enter your email">
                         
                        </Form.Check>
                        </Col>
                        <Col sm={3}>
                        <Form.Check type="radio" label="seller" {...register("role",{required:true})} value={"customer"}placeholder="Enter your email">
                         
                        </Form.Check>
                        <span className="text-danger">
                            <em></em>
                        </span>
                    </Col> */}
                {/* </Form.Group> */}
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Image:</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="file" size="sm"
                        onChange={(e)=>{
                           // const files =Object.values(e.target.files);
                           const image=e.target.files[0]
                           const ext=(image.name.split(".")).pop();
                           if(['jpg','jpeg','png','gif','svg','bmp','webp'].includes(ext.toLowerCase())){
                           if(image.size <=3000000){
                            setThumb(image);
                           setValue("image",image);
                           }else{
                            setError("image","File should be less than 3Mb")
                           }
                           }
                        else{
                            setError("image","File format not supported")
                        }
                           
                        }}
                         />
                             
                     
                        <span className="text-danger">
                            <em>{errors?.image?.message}</em>
                        </span>
                    </Col>
                    <Col sm={2}>
                    <Image src={thumb ? URL.createObjectURL(thumb) :placeholder} fluid alt="" />
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