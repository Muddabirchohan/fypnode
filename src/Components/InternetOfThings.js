import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';

export default class InternetOfThings extends Component {
  constructor(){
    super();
    this.state = {
        iot: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/iot`)
.then(res => {
  const iot = res.data;
  console.log(iot);
  this.setState({ iot });
  
})

}
  render() {
    return (
      <div> 

         <h1 style={{textAlign: 'center'}}> Internet Of Things </h1>
      
  
        <div className="cardAllign">
       
        {this.state.iot.map((obj)=>{
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