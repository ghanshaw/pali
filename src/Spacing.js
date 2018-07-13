import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Spacing extends Component {

    constructor(props) {
        super(props);

        switch (props.spacing) {
            case "small":
                this.spacing = "spacing-small";
                break;
            case "medium":
                this.spacing = "spacing-medium";
                break;
            case "large":
                this.spacing = "spacing-large";
                break;
            case "xlarge":
                this.spacing = "spacing-xlarge";
                break;
            default:
                this.spacing = "spacing-small";
                break;
        }
    }

    render() {
        return (          
            <Row className={"spacing " + this.spacing}>
                <Col xs={12}></Col>
            </Row>
           
        )
    }
}

export default Spacing;



