import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';

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
          <Header2/>
          <h1 style={{textAlign: 'center'}}> Artificial Intelligence </h1> 
        <div className="cardAllign">
        
        {this.state.ai.map((obj)=>{
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
