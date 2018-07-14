import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { hero } from './Constants';
import Spacing from './Spacing';

class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid={false} className="hero">
                <Row className="text-align-left">
                    <Col md={5} className="height-100">
                        <div className="flex-parent" >
                            <div className="flex-child">
                                <h1 className="margin-bottom-25 header">{hero.header}</h1>
                                <h4 className="margin-bottom-50">{hero.body}</h4>
                                <button className="cta cta-primary margin-right-40">{hero.button1}</button>
                                {hero.button2 && <button className="cta cta-secondary">{hero.button2}</button>}
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="height-100">
                        <div className="flex-parent">
                            <div className="flex-child">
                                <img src={hero.src} className="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Spacing spacing="xlarge"></Spacing>
                <Row className="subheader">
                    <Col md={12} className="">
                        <h2>{hero.subheader}</h2>
                    </Col>
                </Row>
            </Grid>
           
        )
    }
}

export default Hero;



