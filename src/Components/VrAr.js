import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import vrar from '../../src/assets/vrar.jpg';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';


export default class VrAr extends Component {
  constructor(){
    super();
    this.state = {
        vrar: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/vrar`)
.then(res => {
  const vrar = res.data;
  console.log(vrar);
  this.setState({ vrar });
  
})

}
  render() {
    return (

      <div>
        <Slider3/>
         <h1 style={{textAlign: 'center'}}> vr / ar</h1>
      <div className="cardAllign">
        {this.state.vrar.map((obj)=>{
          return(
        <Card style={{width: '300px', height: '300px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
  
        <div> 
        <Link to={`/productDescription/${obj._id}` }>
        <img src={obj.screenShot[0]} alt="vrar" weight="300px" height="100px"/>
        </Link>
              <p> {obj.pname} </p>
              <p> {obj.category} </p>
              <p> {obj.demoVideoUrl} </p>   
              <p> {obj.hostUrl} </p>   
              <p> {obj.exeUrl} </p>   
              <p> {obj.cost} </p>  
              {/* <p> <Link to={`/productDescription/${obj._id}` }> desc </Link></p>   */}
 
        </div>
     
            </Card>
          )
        })}
      </div>
      </div>
    )
  }
}
