import React, { Component } from 'react'
import {Carousel,Grid,Row,Col} from 'react-bootstrap';
import '../App.css';


export default class Slider extends Component {
  render() {
    return (
      <div className="style-slide">

     
         <Carousel>
           
  <Carousel.Item>
    {/* <img width="100%%" height="50%" alt="900x500" src={img4} /> */}
    <div className="bg-img"></div>
    <Carousel.Caption>
      <h3> WEB CUSTOMIZATION </h3>
      <p>com let our product customized.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    {/* <img width="100%" height="50%" alt="900x500" src={img5}/> */}
    <div className="bg-img2"></div>
    <Carousel.Caption>
      <h3>Web Apps </h3>
      <p>Progressive web apps on your door steps.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 

      </div>
    )
  }
}
