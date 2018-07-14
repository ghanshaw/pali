import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { footer } from './Constants';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid={true} className="footer">
                <Row className="demo">
                    <Col md={6} className="height-100">
                        <div className="flex-parent">
                            <div className="flex-child text-align-left">
                                <h3 className="bold header margin-bottom-0">{footer.header}</h3>
                                <h3 className="margin-top-0 subheader">{footer.subheader}</h3>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="height-100 text-align-left">
                        <div className="flex-parent left">
                            <div className="flex-child">
                                <button className="cta cta-secondary margin-right-40">{footer.button1}</button>
                                <button className="cta cta-secondary">{footer.button2}</button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <Navbar className="navbar-footer">
                            <Nav className="width-100">
                                <NavItem eventKey={1} href="#">Copyright © 2018 Pali, Inc.</NavItem>
                                <NavItem eventKey={2} href="#">All rights reserved. Terms of Use Privacy Policy</NavItem>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer
