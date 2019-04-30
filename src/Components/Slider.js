import React, { Component } from 'react'
import {Carousel,Grid,Container,Row,Col} from 'react-bootstrap';
import '../App.css';
import '../index.css';
import foregroundimage1 from './../assets/mobileapp.png';
import foregroundimage2 from './../assets/mapphone.png';
import foregroundimage3 from './../assets/vrar.jpg';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';


export default class Slider extends Component {
  render() {
    return (
<div> 
{/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foregroundimage1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foregroundimage2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foregroundimage3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

  <div className="style-slide">
<Grid className="style-slide-grid" >
  <Row>


 <Col xs={4} sm ={12} md={12} lg={6}>
    <img src={foregroundimage1} height="250px"/>
<h1> S- BAY : Buy & Sell Variety Of Softwares <br/>S-BAY is a platform for buying and selling of software products </h1>
    </Col>
    

    {/* <Col xs={4} sm ={12} md={4} lg={6}>
    <img src={foregroundimage1} height="300px"/>

    </Col> */}
    

    {/* <Col xs={4} sm ={12} md={4} lg={6}> 
    <img src={foregroundimage2} width="180"/>
    </Col> */}

    {/* <Col xs={4} sm ={12} md={4} lg={4}>
    <img src={foregroundimage3} width="250"/>
    </Col>
     */}



 {/* <Grid>
  <Row>
    <Col> <img src={foregroundimage1}/> </Col>
    <Col> <img src={foregroundimage2}/> </Col>
  </Row>
  </Grid>  */}

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
    </Row>
</Grid>
</div>
</div>
    )
  }
}
