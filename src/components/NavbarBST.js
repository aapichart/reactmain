import React, { useContext, useState } from 'react';
import {
    Link,
} from "react-router-dom";
import { Navbar, Nav, NavLink, NavDropdown, Button, Container } from 'react-bootstrap';
import DataContext from '../data/DataContext';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const NavbarBST = () => {
    let {isLoggedIn} = useContext(DataContext);
    const [expanded, setExpanded] = useState(false);
return(
    <>
        <div className="Navbar">
            <div className="row">
                <div className="col-md-12">

                        <Navbar collapseOnSelect bg="dark" variant="dark" expand="false" >
                            <Container>
                                <Navbar.Brand href="/">ShareCoupon</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" style={{textAlign:'right',fontSize:16}} >
                                        <NavLink as={Link} to="/" eventKey="1">Home</NavLink>
                                        { !isLoggedIn ? <NavLink as={Link} to="/login" eventKey="2">Login</NavLink> : null }
                                        { !isLoggedIn ? <NavLink as={Link} to="/signup" eventKey="3">Sign-Up</NavLink> : null }
                                        <NavLink as={Link} to="/about" eventKey="4">About Us</NavLink>
                                        <NavLink as={Link} to="/contact" eventKey="5">Contact Us</NavLink>
                                        { isLoggedIn ? <NavLink as={Link} to="/dashboard" eventKey="6">dashboard</NavLink> : null }
                                        { isLoggedIn ? <NavLink as={Link} to="/logout" eventKey="7">Logout</NavLink> : null }
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <br />

                </div>
            </div>
        </div>
    </>
)    
};
export default NavbarBST;


