import React, { Component } from 'react'
import {Carousel,Grid,Container,Row,Col} from 'react-bootstrap';
import '../App.css';
import '../index.css';
import foregroundimage1 from './../assets/mobileapp.png';
import foregroundimage2 from './../assets/mapphone.png';
import foregroundimage3 from './../assets/vrar.jpg';



export default class Slider extends Component {
  render() {
    return (
<div className="style-slide"> 
<Grid>
  <Row>

    <Col xs={4} sm ={12} md={4} lg={6}>
    <img src={foregroundimage1} height="300px"/>

    </Col>
    

    {/* <Col xs={4} sm ={12} md={4} lg={6}> 
    <img src={foregroundimage2} width="180"/>
    </Col> */}

    {/* <Col xs={4} sm ={12} md={4} lg={4}>
    <img src={foregroundimage3} width="250"/>
    </Col>
     */}
    </Row>
</Grid>


{/* <Grid>
  <Row>
    <Col> <img src={foregroundimage1}/> </Col>
    <Col> <img src={foregroundimage2}/> </Col>
  </Row>
  </Grid> */}

         {/* <Carousel>
           
         <Carousel.Item>
    <div className="bg-img2"></div>
    <Carousel.Caption>
      <h3> ANDROID APPLICATION </h3>
      <p>com let our product customized.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <div className="bg-img"></div>
    <Carousel.Caption>
      <h3> WEB CUSTOMIZATION </h3>
  
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
  */}

      </div>
    )
  }
}
