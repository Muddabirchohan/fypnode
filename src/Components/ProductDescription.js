import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
import Header2 from './Header2';
import '../App.css';
import '../index.css';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/PostActions';



 class ProductDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){

        axios.get(`http://localhost:7000/products/${this.props.match.params.myid}`)
        .then(res => {
          const products = res.data;
          console.log("screnshit",products);
          this.setState({ products });
        })
    }

    addCart(obj, _id){
      let {addedIds, addToCart} = this.props;
       if(addedIds.includes(_id)){
           alert('already exist')
       }else addToCart(obj, _id)
    }
    

    render(){
        const {products} = this.state;
        return(
            <div>
                <Slider3/>
               <Grid>
  <Row>

    <Col xs={12} sm ={12} md={4} lg={8}>
    <Card >
      <CardActionArea>
        <CardContent>
            <div >
<img src={products.screenShot} alt="description" style={{display: 'block',marginLeft: 'auto',marginRight: 'auto'}}/>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    
    <Col xs={12} sm ={12} md={4} lg={4}> 
    
    <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
              <h1> cost   :   {products.cost} Rs </h1> 
            <div className="centerCart"> 
            <br/><br/>
    
</div>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>


        
        <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
            <h2> Seller Profile</h2>
            <p> Seller Id : {products.seller_id}   </p> 
            <div className="centerCart"> 
            <br/><br/>

</div>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
    </Col>
    </Row>


<Row> 

<Col xs={12} sm ={12} md={4} lg={8}>

<div> 
    <Card className="productDescription">
      <h1> DETAILS </h1> <hr/>
      <br/>  <br/> 
                  <h4> name    :   {products.pname} </h4> 
            <h4> category :   {products.category} </h4> 
            <h4> demovideo   :   {products.demoVideoUrl}</h4>     
            <h4> exeurl   :   {products.exeUrl}</h4>
            <br/>  <br/> 
     <h1> DESCRIPTION </h1> <hr/>    
     <br/>  <br/> 
   <h4> {products.pdescription} </h4>  
 
            </Card >
      </div>
 </Col>
  
<Col xs={12} sm ={12} md={4} lg={4} className="productDescription">
<Button variant="contained" color="primary"  style={{width: '100%'}} onClick={()=> this.addCart(products,products._id)}> Add To Cart <i class="fas fa-cart-plus"></i> </Button> 

 </Col>
 

</Row>
 
</Grid>
            </div> 
        )
    }
}

const mapStateToProps = (state,dispatch) => ({
  cart: state.posts.cart,
  addedIds: state.posts.addedIds,
})

export default connect(mapStateToProps, {addToCart})(ProductDescription);