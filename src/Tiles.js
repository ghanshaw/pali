import React, { Component } from 'react';
import { tiles } from './Constants';
import { Grid, Row, Col } from 'react-bootstrap';

class Tiles extends Component {

    constructor(props) {
        super(props);
    }

    generateTiles() {
        let tileArr = [];
        tiles.list.map((tile, index) => {
          tileArr.push(
            <Col key={index} xs={12} sm={6} md={4}>
                <div className="tile text-align-left">
                    <img src={tile.src} />
                    <h4 className="tile-title">{tile.title}</h4>
                    <h4 className="tile-description">{tile.description}</h4>
                </div>
            </Col>
          )
        });
    
        return (
          <Row>
            <Col xs={12} xsOffset={0}>
              <Row>{tileArr}</Row>
            </Col>
          </Row>
        );
      }

    render() {
        return (
            <Grid fluid={false}>
                <Row>
                    <h2 className="margin-bottom-40 bold">{tiles.header}</h2>
                </Row>

                {this.generateTiles()}
            </Grid>
        )
    }

}

export default Tiles