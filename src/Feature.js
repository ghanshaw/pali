import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.ltr = this.props.direction === 'ltr';
        this.rtl = this.props.direction === 'rtl';
    }

    getImg() {
        return (
            <div className="img-wrapper flex-parent">
                <img src={this.props.src} className="flex-child"/>
            </div>  
        )
    }

    getMessage() {
        let bulletArr = [];
        this.props.body.forEach((bullet, index) => { 
            bulletArr.push(<h4 key={index}><i className="fas fa-check"></i>{bullet}</h4>); 
        });
        return (
            <div className="text-wrapper flex-parent">
                <div className="text flex-child">
                    <h3 className="margin-bottom-25">{this.props.header}</h3>
                    {bulletArr}
                </div>
            </div>
        )
    }

    render() {
        return (
            <Grid fluid={true} className="feature wrapper">
                <Row className="row">
                    <Col md={6} className="col">
                        {this.ltr ? this.getMessage() : this.getImg()}
                    </Col>
                    <Col md={6} className="col">
                        {this.ltr ? this.getImg() : this.getMessage()}
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Feature
