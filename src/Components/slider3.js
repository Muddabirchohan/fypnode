import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ned from './../assets/nedlogo.jpg';
import cart from './../assets/cart.png';
import {connect} from 'react-redux';
import {Grid,Col,Row} from 'react-bootstrap';
import { removeFromCart,addToCart } from '../actions/PostActions';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import TextField from '@material-ui/core/TextField';
import { fetchproducts } from '../actions/PostActions';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';


 class slider3 extends Component {

  constructor(props){
    super(props)
    this.state = {
    search: ''
    }
  }
    componentDidMount(){
      this.props.fetchproducts();
    }

    // searchData(e){
    //   this.setState({ search: e.target.value})
    //   console.log(this.state.search);
     
    // }

    // searchProduct(){
    //   console.log("works")
    //   let filteredItmes=[];
    //   this.props.products.filter( obj =>{
    //     if(obj.pname === this.state.search){
    //       filteredItmes.push(obj);
    //       console.log("filter done",filteredItmes)
    //     }
    //   })
    // }
  render() {
    return (
      <div>
        <Grid>
  <Row>
    <Col></Col>
  </Row>
</Grid>
          <div className="myNavbar">
        <Link to="#" className="toggle" id="one">
                <i className="fas fa-bars"></i>
            </Link>
           
        <Link to="#" className="brand">
            <img src={ned} alt="ned" height="50" style={{borderRadius: '50%'}}/>
        </Link>
          
        <Link to="#">  <h1 style={{paddingTop: '15px',fontFamily:'fantasy'}}> S-BAY </h1>   </Link>
          
    {/* <div className="left" style={{paddingTop: '10px'}}>
    <Link to="/customerLogin" className="link"  > Buy  </Link>
    <AnchorLink href='#products' style={{paddingTop: '12px',fontSize: '20px'}}> Products  </AnchorLink> 
     <AnchorLink href='#footers' style={{color: 'white', paddingTop: '12px',marginLeft: '20px'}}> Footer  </AnchorLink> 
    </div> */}

    {/* <div className="left" style={{paddingTop: '10px'}}>
    <TextField
          id="filled-search"
          label="Search field"
          type="search"
          margin="normal"
          variant="filled"
          onChange={this.searchData.bind(this)}
        />    
        <Button onClick={this.searchProduct.bind(this)}> search </Button>
        </div> */}

    <div className="right" style={{paddingTop: '10px'}}>
        <Link to="/cart" className="link" > <img src={cart} height={45} alt="cart"/>   </Link>
        <Link to="/sellerlogin" className="link" style={{fontSize: '15px'}}> SELL </Link>
  
    </div>

</div>
      </div>
    )
  }
}

const mapStateToProps = (state,dispatch) => ({
    cartCounter: state.posts.cartCounter,
    products: state.posts.items,
  })
  
  export default connect(mapStateToProps,{ fetchproducts })(slider3);
  
