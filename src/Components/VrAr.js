import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';

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
         <h1 style={{textAlign: 'center'}}> vr / ar</h1>
      <div className="cardAllign">
        {this.state.vrar.map((obj)=>{
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
