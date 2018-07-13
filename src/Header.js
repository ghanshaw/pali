import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar fixedTop className="navbar-white">
                <Navbar.Header>
                    <Navbar.Brand className="brand">
                        <a href="#home"><img src="images/logo.png" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#features" className="nav-item">Features </NavItem>
                    <NavItem eventKey={2} href="#demo" className="nav-item">Demo</NavItem>
                </Nav>
            </Navbar>
        )
    }

}

export default Header
