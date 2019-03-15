import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import ai from '../../src/assets/ai.jpg';
import Slider3 from './slider3';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class InternetOfThings extends Component {
  constructor(){
    super();
    this.state = {
      ai: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/ai`)
.then(res => {
  const ai = res.data;
  console.log(ai);
  this.setState({ ai });
  
})

}
  render() {
    return (
        <div>
         <Slider3/>
          <h1 style={{textAlign: 'center'}}> Artificial Intelligence </h1> 
        
        
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ai}
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
      src={ai}
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
      src={ai}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
        
        <div className="cardAllign">
        
        {this.state.ai.map((obj)=>{
          return(
        <Card style={{textAlign: 'center', width: '300px', height: '200px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
       
        <img src={ai.screenShot} alt="ai" weight="300px" height="100px"/>
              <p> {obj.pname} </p>
              <p> {obj.category} </p>
              <p> {obj.demoVideoUrl} </p>   
              <p> {obj.hostUrl} </p>   
              <p> {obj.exeUrl} </p>   
              <p> {obj.cost} </p>   
              <p> <Link to={`/productDescription/${obj._id}` }> desc </Link></p>  

            </div>
            </Card>
          )
        })}
      </div>
 </div>
    )
  }
}
