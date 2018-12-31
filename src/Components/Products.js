import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import product from '../../src/assets/product.jpg';
import {Link} from 'react-router-dom';

export default class Products extends Component {
  

    constructor(){
        super();
        this.state = {
            products: [],
            productDescription: []
        }
        this.getDescription = this.getDescription.bind(this);
    }
  
  componentDidMount(){

    axios.get(`http://localhost:7000/products/getproducts`)
    .then(res => {
      const products = res.data;
      console.log(products);
      this.setState({ products });
    })
  }

  getDescription(obj,id){
    console.log(obj);
    console.log(id);
 let pd = this.state.productDescription;
  pd.push(obj);
   this.setState({ productDescription: pd})
  }
    render() {
    
    console.log(this.state.products)
        return (
      <div  className="cardAllign" id="products">
      
        {this.state.products.map((obj,_id)=>{
          return(
<div>
<Card style={{width: '300px', height: '300px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}> 
<img src={product} alt="profile" width="200" height="200"/>
<p> {obj.category} </p>
<p> {obj.cost} </p>

<Link to={`/productDescription/${obj._id}`}> 
<Button variant="contained" color="primary" onClick={()=> this.getDescription(obj,obj._id)}> Description </Button>
</Link>
<Button variant="contained" color="primary" style={{marginLeft: '30px'}}> Add  </Button>
</Card>
</div> 
         )      
     })}  
</div>
    )
  }
}
