import React, { Component } from 'react'
import {Carousel,Grid,Row,Col} from 'react-bootstrap';
import img1 from './../assets/img1.jpg';
import img2 from './../assets/img2.jpg';
import img3 from './../assets/img3.jpg';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'


export default class Slider extends Component {
  render() {
    return (
      <div>



   <Grid> 
     <Row>
     <Col lg={4}> 
     
    
     <Card >
      <CardActionArea>
  
        <CardContent >
      <img src={img2} alt="img3"/>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    
  
     </Col>  

         <Col lg={8}> 
     
         <Carousel>
  <Carousel.Item>
    <img width={500} height={300} alt="900x500" src={img1} />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    <img width={500} height={500} alt="900x500" src={img3} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </Col>  

     
     </Row> 
    </Grid> 


      </div>
    )
  }
}
