import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ned from './../assets/nedlogo.jpg';
import cart from './../assets/cart.png';
import {connect} from 'react-redux';
import {Grid,Col,Row} from 'react-bootstrap';
import { removeFromCart,addToCart } from '../actions/PostActions';

 class slider3 extends Component {
    componentDidMount(){
            console.log("cart items",this.props.cartcounter);
        // const one = document.querySelector('#one');
        // one.addEventListener('click', (e)=>{
        //     one.parentElement.classList.toggle('active');
        // })
    }
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
          
          <h1 style={{paddingTop: '15px',color: 'white',fontFamily:'fantasy'}}> S-BAY </h1>
          
    <div className="left" style={{paddingTop: '10px'}}>
      
    </div>

    <div className="right" style={{paddingTop: '10px'}}>
        <Link to="/cart" className="link" > <img src={cart} height={30} alt="cart"/>   </Link>
        <Link to="/sellerlogin" className="link"> SELL </Link>
        
    </div>

</div>
      </div>
    )
  }
}

const mapStateToProps = (state,dispatch) => ({
    cartCounter: state.posts.cartCounter
  })
  
  export default connect(mapStateToProps)(slider3);
  
