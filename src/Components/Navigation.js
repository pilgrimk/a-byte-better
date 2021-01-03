import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
    return (
        <div className="nav">
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>A Byte Better</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="page-1">Page-1</Nav.Link>
                        <Nav.Link href="page-2">Page-2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;