import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import cart from './../assets/cart.png';

export default class slider3 extends Component {
    componentDidMount(){
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
           
        <Link to="#" className="brand">myname
                <span className="size"> <i className="fas fa-horse-head"></i></span>
        </Link>
          
    <div className="left">
        <Link to="#" className="link">Home</Link>
        <Link to="" className="link">Features</Link>
        <Link to="" className="link">Solutions</Link>
        <Link to="" className="link">Pricing</Link>
        <Link to="" className="link">Demo</Link>
        <Link to="" className="link">Help</Link>
        <Link to="" className="link">Contact</Link>
    </div>

    <div className="right">
    {/* <Link to="/cart" className="toggle"> <img src={cart} width="100px" height="50px" alt="cart"/></Link>  */}

        <Link to="/cart" className="link">cart</Link>
        <Link to="/sellerlogin" className="link">LogIn</Link>
        
    </div>
</div>
      </div>
    )
  }
}
