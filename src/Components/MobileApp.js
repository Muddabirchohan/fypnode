import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import mobileapp from '../../src/assets/mobileapp.png';
import mobileapp1 from '../../src/assets/mobileapp1.png';
import mobileapp2 from '../../src/assets/mobileapp2.png';
import mobileapp3 from '../../src/assets/mobileapp3.png';
import Slider3 from './slider3';
import {Carousel} from 'react-bootstrap';
import '../index.css';

export default class MobileApp extends Component {
  constructor(){
    super();
    this.state = {
        androidproducts: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/androidproducts`)
.then(res => {
  const androidproducts = res.data;
  console.log(androidproducts);
  this.setState({ androidproducts });
  
})

}
  render() {
    return (

      <div>
  <Slider3/>
           <h1 style={{textAlign: 'center'}}> Mobile App</h1>
           

           <Carousel>
  <Carousel.Item>
    <img  className="d-block"
      src={mobileapp1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
   className="d-block"
   src={mobileapp2}
   alt="second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="d-block"
     src={mobileapp3}
     alt="third slide"
    />

  </Carousel.Item>
</Carousel>


      <div className="cardAllign">
           {this.state.androidproducts.map((obj)=>{
          return(
        <Card style={{width: '300px', height: '200px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
        <img src={obj.screenShot[0]} alt="mobileapp" weight="300px" height="100px"/>

              <p> {obj.pname} </p>
              <p> {obj.category} </p>  
              <p> {obj.demoVideoUrl} </p>   
              <p> {obj.hostUrl} </p>   
              <p> {obj.exeUrl} </p>   
              <p> {obj.cost} </p>   
            </div>
            </Card>
          )
        })}
      </div>
      </div> 
    )
  }
}

