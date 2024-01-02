
import { useState } from "react";
import {  Container, Form, Navbar} from "react-bootstrap";


import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

const HomeHeader = () => {
    const [theme,setTheme]=useState('dark')
    const changeTheme = ()=>{
        setTheme(theme ==="dark" ? "light" :"dark")    }
    return(<>
    <Navbar expand="lg" 
    className="bg-body-tertiary" 
    bg={theme} 
    data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <Nav.Link href="#link">Shop</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Category 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Form>
              <Form.Control type="search" size="sm" placeholder="Enter your search key"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#">Cart(0)</Nav.Link>
            <Nav.Link href="#home">Kritan sitaula</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <Nav.Link href="#link">Signup</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}
 export default HomeHeader;