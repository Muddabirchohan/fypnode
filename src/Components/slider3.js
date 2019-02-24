import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ned from './../assets/nedlogo.jpg';
import cart from './../assets/cart.png';
import {connect} from 'react-redux';
import { removeFromCart,addToCart } from '../actions/PostActions';

 class slider3 extends Component {
    componentDidMount(){
            console.log(this.props.cartcounter);
        const one = document.querySelector('#one');
        one.addEventListener('click', (e)=>{
            one.parentElement.classList.toggle('active');
        })
    }
  render() {
    return (
      <div>
          <div className="myNavbar">
        <Link to="#" className="toggle" id="one">
                <i className="fas fa-bars"></i>
            </Link>
           
        <Link to="#" className="brand">
            <img src={ned} alt="ned" height="50" style={{borderRadius: '50%'}}/>
        </Link>
          
          <h1 style={{paddingTop: '15px',color: 'white',fontFamily:'fantasy'}}> S-BAY </h1>
          
    <div className="left" style={{paddingTop: '10px'}}>
        <Link to="#" className="link">Home</Link>
        <Link to="" className="link">Features</Link>
        <Link to="" className="link">Solutions</Link>
        <Link to="" className="link">Pricing</Link>
        <Link to="" className="link">Demo</Link>
        <Link to="/sell" className="link">Sell</Link>
        <Link to="/contactus" className="link">Contact</Link>
    </div>

    <div className="right" style={{paddingTop: '10px'}}>
    {/* <Link to="/cart" className="toggle"> <img src={cart} width="100px" height="50px" alt="cart"/></Link>  */}
        <Link to="/cart" className="link" > <img src={cart} height={30} alt="cart"/> {this.props.cartCounter}  </Link>
        <Link to="/sellerlogin" className="link">LogIn</Link>
        
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
  
