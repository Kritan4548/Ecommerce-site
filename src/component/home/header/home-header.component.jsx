

import {  Container, Form, Navbar} from "react-bootstrap";


import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {FaMicrochip, FaMobile} from "react-icons/fa"
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  useTheme } from "../../../config/theme.context";

const HomeHeader = () => {
  const {theme,toggleTheme}=useTheme()
 
    // const [theme,setTheme]=useState('dark')
    // const changeTheme = ()=>{
    //     setTheme(theme ==="dark" ? "light" :"dark")    }
    const switchTheme =(e)=>{
      e.preventDefault()
      toggleTheme(theme)

    }
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
              <NavLink to="/category/electronics" className={"dropdown-item"}><FaMicrochip /> Electronics</NavLink>
              <NavLink to="/category/smart-phone" className={"dropdown-item"}><FaMobile /> Smart Phones</NavLink>
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
            <Nav.Link href="/" onClick={switchTheme}>{theme}</Nav.Link>
            {/* <Nav.Link href="#home">Kritan sitaula</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link> */}
            <NavLink to="/login" className={"nav-link"}>Login</NavLink>
            <NavLink to="/register" className="nav-link">Signup</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}
 export default HomeHeader;