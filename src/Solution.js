import React, { Component } from 'react';
import { solution } from './Constants';
import FigCaption from './FigCaption';
import { Grid, Row, Col } from 'react-bootstrap';

class Solution extends Component {

    constructor(props) {
        super(props);
    }

    generateFigCaptions() {
        let figCaptionArr = [];
        solution.figCaption.map((item, index) => {
            figCaptionArr.push(
                <Col key={index} md={3}>
                    <FigCaption header={item.header} body={item.body} src={item.src}></FigCaption>
                </Col>
            );
        });

        return figCaptionArr;
    }

    render() {
        return (
            <Grid fluid={false} className="solution">
                <Row>
                    <Col>
                        <h2>{solution.header}</h2>
                    </Col>
                </Row>

                <Row className="margin-bottom-50">
                    <Col><h3 className="margin-top-0">{solution.subheader}</h3></Col>
                </Row>

                <Row className="margin-bottom-75">{this.generateFigCaptions()}</Row>

                <Row className="margin-bottom-50">
                    <Col md={6}>
                        <div className="card">
                            <img src="images/enterprise.svg" className="icon"/>
                            <div className="content"> 
                                <h4 className="bold">{solution.enterprise.header}</h4>
                                <h4>{solution.enterprise.body}</h4>
                            </div>
                        </div>        
                    </Col>
                
                    <Col md={6}>
                        <div className="card">
                            <img src="images/calculator.svg" className="icon"/>
                            <div className="content"> 
                                <h4 className="bold">{solution.accountants.header}</h4>
                                <h4>{solution.accountants.body}</h4>
                            </div>
                        </div>        
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Solution;
