import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import MobileApp from './Components/MobileApp';
import WebApp from './Components/WebApp'; 
import VrAr from './Components/VrAr';
import Ecommerce from './Components/Ecommerce';
import InternetOfThings from './Components/InternetOfThings';
import ArtficialIntelligence from './Components/ArtificialIntelligence';
import sellerLogin from './Components/sellerLogin';
import sellerSignup from './Components/sellerSignup';
import customerLogin from './Components/customerLogin';
import customerSignup from './Components/customerSignup';
import sellerProfile from './Components/sellerProfile';
import customerProfile from './Components/customerProfile';
import ProductDescription from './Components/ProductDescription';
import Contactus from './Components/ContactUs';
import Cart from './Components/Cart';
<<<<<<< HEAD
import PostProduct from './Components/PostProduct';
import CustomerRegistartion from './Components/CustomerRegistration';
=======
import sellPage from './Components/sellPage';
>>>>>>> 372679a2a76a201049044f6f61cbd814b3e817dd

export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>   
        <Route  path="/mobileapp" component={MobileApp}/>    
        <Route  path="/webapp" component={WebApp}/>  
        <Route  path="/vrar" component={VrAr}/>  
        <Route  path="/ecommerce" component={Ecommerce}/>  
        <Route  path="/internetofthings" component={InternetOfThings}/>  
        <Route  path="/artificialintelligence" component={ArtficialIntelligence}/>  
        <Route path="/sellerLogin" component={sellerLogin}/> 
        <Route path="/sellerSighnup" component={sellerSignup}/> 
        <Route path="/sellerProfile/:id" component={sellerProfile}/> 
        <Route path="/customerProfile/:id" component={customerProfile}/> 
        <Route path="/productDescription/:myid" component={ProductDescription}/> 
        <Route path="/cart" component={Cart}/> 
        <Route path="/contactus" component={Contactus}/> 
<<<<<<< HEAD
        <Route path="/postproducts" component={PostProduct}/> 
        <Route path="/customerSighnup" component={CustomerRegistartion}/> 
        <Route path="/customerLogin" component={customerLogin}/> 
        
=======
        <Route path="/sell" component={sellPage}/> 
>>>>>>> 372679a2a76a201049044f6f61cbd814b3e817dd
        
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
