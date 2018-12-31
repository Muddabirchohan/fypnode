import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';

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

           <h1 style={{textAlign: 'center'}}> Mobile App</h1>
      <div className="cardAllign">
           {this.state.androidproducts.map((obj)=>{
          return(
        <Card style={{width: '300px', height: '200px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
              <p> {obj.pname} </p>
              <p> {obj.pdescription} </p>
              <p> {obj.category} </p>  
            </div>
            </Card>
          )
        })}
      </div>
      </div> 
    )
  }
}
