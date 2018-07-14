import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FigCaption from './FigCaption';
import { howItWorks as constants } from './Constants';

class HowItWorks extends Component {

    constructor(props) {
        super(props);
    }

    generateFigCaptions() {
        let figCaptionArr = [];
        constants.steps.map((item, index) => {
            figCaptionArr.push(
                <Col key={index} md={3}>
                    <FigCaption key={index} header={item.header} body={item.body} src={item.src} alignment="left"></FigCaption>
                </Col>
            );
        });
        return figCaptionArr;
    }

    render() {
        return (
            <Grid fluid={false}>
                <Row className="margin-bottom-30">
                    <Col xs={12}>
                        <h2 className="text-align-center">{constants.header}</h2>
                    </Col>
                </Row>

                <Row className="margin-bottom-50">
                    <Col xs={12}>
                        <h3 className="text-align-center margin-top-0">{constants.subtitle}</h3>
                    </Col>
                </Row>

                <Row>
                    {this.generateFigCaptions()}
                </Row>
            </Grid>
        )
    }
}

export default HowItWorks;