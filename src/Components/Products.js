import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'

export default class Products extends Component {
  

    constructor(){
        super();
        this.state = {
            products: []
        }
    }
  
  componentDidMount(){

    axios.get(`https://greencommunitylaundry.herokuapp.com/api/products`)
    .then(res => {
      const products = res.data;
      this.setState({ products });
    })
  }
  
  
    render() {
    console.log(this.state.products)
        return (
      <div  className="cardAllign">
          {this.state.products.map((pro,key)=>{
              return(
                <Card style={{ width: '250px', height: '250px', marginLeft: '30px', marginTop: '30px'}} >
                <CardActionArea>
                  <CardMedia
                  
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent >
                     <div>
                  
                     <img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${pro.image}`} style={{height: '150px'}} width="100%" alt={pro._id}/>
                     </div> 
                  </CardContent>
                </CardActionArea>
                {pro.name}
                <CardActions>
                
                </CardActions>
              </Card>
              )
          })
        
          }
          </div>
    )
  }
}
