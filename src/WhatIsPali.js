import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { whatIsPali as constants } from './Constants';
import FigCaption from './FigCaption';

class WhatIsPali extends Component {

    constructor(props) {
        super(props);
    }

    generateFigCaptions() {
        let figCaptions = [];
        constants.figCaption.forEach((item, index) => {
            figCaptions.push(
                <Col key={index} md={4}>
                    <FigCaption header={item.header} body={item.body} src={item.src} alignment="left" ></FigCaption>
                </Col>
                )
        })
        return figCaptions;
    }

    render() {
        return (
            <Grid fluid={false} className="what-is-pali">
                <Row className="md-text-align-center xs-text-align-center margin-bottom-40">
                    <Col xs={12} md={10} mdOffset={1}>
                        <h3>{constants.header}</h3>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={12}>
                        <button className="cta cta-primary margin-bottom-50">{constants.button}</button>
                    </Col>
                </Row>

                <Row className="margin-bottom-50"> 
                    {this.generateFigCaptions()}
                </Row>

                <Row>
                    <Col md={12} mdOffset={0}>
                        <div className="highlight">
                            <h3 className="message margin-bottom-0">{constants.byline1}</h3>
                            <h3 className="message bold margin-top-0">{constants.byline2}</h3>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default WhatIsPali;
