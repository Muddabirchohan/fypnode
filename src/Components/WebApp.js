
import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'


export default class WebApp extends Component {
  constructor(){
    super();
    this.state = {
        webproducts: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/webproducts`)
.then(res => {
  const webproducts = res.data;
  console.log(webproducts);
  this.setState({ webproducts });
  
})

}

  render() {
    return (
      <div>
            <h1 style={{textAlign: 'center'}}> web app </h1> 
      <div className="cardAllign">
  
        {this.state.webproducts.map((obj)=>{
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