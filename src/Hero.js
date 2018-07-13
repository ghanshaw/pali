import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { hero } from './Constants';

class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid={false}>
                <Row className="hero-row text-align-left">
                    <Col md={5} className="height-100">
                        <div className="flex-parent" >
                            <div className="flex-child">
                                <h1 className="margin-bottom-50">{hero.header}</h1>
                                <h4 className="margin-bottom-50">{hero.body}</h4>
                                <button className="cta cta-primary margin-right-40">{hero.button1}</button>
                                {hero.button2 && <button className="cta cta-secondary">{hero.button2}</button>}
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="height-100">
                        <div className="flex-parent">
                            <img src={hero.src} className="max-width-100 flex-child" />
                        </div>
                    </Col>
                </Row>
            </Grid>
           
        )
    }
}

export default Hero;



