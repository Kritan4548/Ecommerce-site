import { Col, Container,  Row } from "react-bootstrap"

import { NavLink } from "react-router-dom"
export const Error404 =() =>{

    return (
        <>
      
        <Container className="my-5" style={{background:"rgb(255 0 0 / 29%)"}}>
            <Row>
                <Col sm={12} className="text-center p-3">
                    <p className="text-danger">Oops! requested page doesnot exist.</p>
                    <p className="text-danger">Redirect
                        &nbsp;&nbsp;
                        <NavLink to={"/"} className="text-decoration-none">Back to home</NavLink>
                    </p>

                </Col>
            </Row>
        </Container>
        </>
    )
}