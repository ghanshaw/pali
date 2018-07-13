import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { integrations } from './Constants';

class Integrations extends Component {

    constructor(props) {
        super(props);
        this.ltr = this.props.direction === 'ltr';
        this.rtl = this.props.direction === 'rtl';
    }

    render() {
        return (
            <Grid fluid={true} className="integrations">
                <Row className="row">
                    <Col md={4} mdOffset={2} className="col text-align-left">
                        <div className="flex-parent">
                            <div className="flex-child">
                                <h3 className="bold">{integrations.title}</h3>
                                <h4>{integrations.body}</h4>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}><img src={integrations.src} /></Col>
                </Row>
            </Grid>
        )
    }
}

export default Integrations;
