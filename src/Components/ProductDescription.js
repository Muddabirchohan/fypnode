import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
export default class ProductDescription extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:7000/products/${this.props.match.params.myid}`)
        .then(res => {
          const products = res.data;
          console.log(products);
          this.setState({ products });
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div>
               <Grid>
  <Row>

    <Col xs={4} sm ={12} md={4} lg={4}>
    <Card >
      <CardActionArea>
        <CardContent>
            <div>
<img src={productdescription} alt="description"/>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={8}> 
    <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
            
            <p> name    :   {products.pname} </p> 
            <p> Address :   {products.category} </p> 
            <p> Email   :   {products.cost} </p> 
            <p> Contact :   {products.hostUrl} </p> 
            <p> video   :   {products.demoVideoUrl}</p>
            <p> description   :   {products.pdescription}</p>
            <p> exeurl   :   {products.exeUrl}</p>
            
            
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
    </Col>
    </Row>
</Grid>
            </div> 
        )
    }
}

