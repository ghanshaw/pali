import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import Tiles from './Tiles';
import Header from './Header';
import Integrations from './Integrations';
import DemoForm from './Form';
import Footer from './Footer';
import Feature from './Feature';
import HowItWorks from './HowItWorks';
import WhatIsPali from './WhatIsPali';
import Spacing from './Spacing';
import Solution from './Solution';
import Hero from './Hero';
import FigCaption from './FigCaption';
import { features, tiles } from './Constants';

class App extends Component {

  createFeatures() {
    let featuresArr = [];
    features.map((f, i) => {
      featuresArr.push(
        <Feature key={i} header={f.header} body={f.body} src={f.src} direction={f.direction}></Feature>
      )
    })
    return (
      <Grid fluid={false}>{featuresArr}</Grid>
      );
  }
        
  render() {
   

    return (
      <div className="App">
        {/* Brand */}
        <Header></Header>
        
        {/* Side Margins */}
        <Grid fluid={true}>

          {/* <div style={spacing}></div> */}

          {/* Hero */}
          <Spacing spacing="large"></Spacing>
          <Hero></Hero>

          {/* What is Pali? */}
          <Spacing spacing="large"></Spacing>
          <WhatIsPali></WhatIsPali>

          {/* Features */}
          <Spacing spacing="medium"></Spacing>
          {this.createFeatures()}

          {/* Features */}
          <Spacing spacing="medium"></Spacing>
          <Integrations />
      
          {/* How It Works */}
          <Spacing spacing="medium"></Spacing>
          <HowItWorks></HowItWorks>

          {/* Tiles */}
          <Spacing spacing="large"></Spacing>
          <Tiles></Tiles>

          {/* Solution */}
          <Spacing spacing="medium"></Spacing>
          <Solution></Solution>

          {/* Footer */}
          <Spacing spacing="medium"></Spacing>
          <Footer></Footer>
        </Grid>
      </div>
    );
  }
}

export default App;
