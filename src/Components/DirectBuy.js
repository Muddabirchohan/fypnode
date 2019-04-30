import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import '../App.css';
import '../index.css';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/PostActions';


class DirectBuy extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){

        axios.get(`http://localhost:7000/products/${this.props.match.params.buyid}`)
        .then(res => {
          const products = res.data;
          console.log("screnshit",products);
          this.setState({ products });
        })
    }


    render() {
        const {products} = this.state;
        return (
            <div>
                 <Card >
      <CardActionArea>
        <CardContent>
            <div >
<img src={products.screenShot} alt="description" style={{height: '100%',display: 'block',marginLeft: 'auto',marginRight: 'auto'}}/>
<h4> name    :   {products.pname} </h4> 
            <h4> category :   {products.category} </h4> 
            <h4> demovideo   :   {products.demoVideoUrl}</h4>     
            <h4> exeurl   :   {products.exeUrl}</h4>
            <Button variant="contained" color="primary" > Buy <i class="fas fa-cart-plus"></i> </Button>   

            <br/>  <br/> 
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>
        );
    }
}

export default DirectBuy;