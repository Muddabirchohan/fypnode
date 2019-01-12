import React, { Component } from 'react'
import {Carousel,Grid,Row,Col} from 'react-bootstrap';
import img1 from './../assets/img1.jpg';
import img2 from './../assets/img2.jpg';
import img3 from './../assets/img3.jpg';
import img4 from './../assets/img4.png';
import img5 from './../assets/img5.jpg';

import download from './../assets/download.jpg';
import '../App.css';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'


export default class Slider extends Component {
  render() {
    return (
      <div className="style-slide">

     
         <Carousel>
           
  <Carousel.Item>
    {/* <img width="100%%" height="50%" alt="900x500" src={img4} /> */}
    <div className="bg-img"></div>
    <Carousel.Caption>
      <h3> slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    {/* <img width="100%" height="50%" alt="900x500" src={img5}/> */}
    <div className="bg-img2"></div>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 

      </div>
    )
  }
}
