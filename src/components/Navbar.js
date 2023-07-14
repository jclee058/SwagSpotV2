import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



import './Navbar.css';

function NavbarFunc(props) {
    const pathname = window.location.pathname;
    const [button, setBtnTitle] = React.useState(false); //English will be false
    const changeBtnTitle = () => {
        setBtnTitle(!button);
    }

    return (
        <>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
            <Container>
                <Navbar.Brand as={NavLink} to={"/home"} activeClassName="active" className="swagSpotLogo">The Swag Spot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" className="me-auto">
                    <Nav.Link as={NavLink} to="/about" activeClassName="active">About Us</Nav.Link>
                    <NavDropdown title="Classes" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/classes" activeClassName="active">Classes</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/schedule" activeClassName="active">Class Schedule</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/pricing" activeClassName="active">Pricing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to={"/location"} activeClassName="active">Location</Nav.Link>
                    <Nav.Link as={NavLink} to={"/contact"} activeClassName="active">Contact</Nav.Link>
                    <Nav.Link as={NavLink} to={"/faq"} activeClassName="active">FAQ</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {pathname === "/contact" &&( //only show language button on contact page (since we dont change language in other pages)
                        <Button onClick={event => {props.doIt(); changeBtnTitle();}} className="languageBtn"> 
                            {button === false &&(
                                <p>Fr</p>                        
                            )}
                            {button === true &&(
                                <p>En</p>                        
                            )}
                        </Button>
                    )}
                    <Button as={Link} to={"/register"} variant="dark" className="regBtn">Register</Button>{' '}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </div>
        </>
  );
}

export default NavbarFunc;

