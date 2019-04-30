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
import PostProduct from './Components/PostProduct';
import CustomerRegistartion from './Components/CustomerRegistration';
import requireAuth from './Components/Authentication';
import NewProductRequest from './Components/NewProductRequest';
import AdminPanel from './Components/AdminPanel';
import sellerProducts from './Components/SellerProducts';
import { ProtectedRoute } from "./Components/ProtectedRoutes";
import MyRequests from './Components/MyRequests';
import Cart2 from './Components/Cart2';
import ProductCustomize from './Components/ProdcutCustomize';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import MaterialUiFields from './Components/MaterialUiFields'
import DirectBuy from './Components/DirectBuy';
import ForgotPasswordCustomer from './Components/ForgotPasswordCustomer';
import ResetPasswordCustomer from './Components/ResetPasswordCustomer';

export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>   
        {/* <ProtectedRoutes exact path="/sellerLogin" component={sellerLogin} /> */}
        <Route  path="/mobileapp" component={MobileApp}/>    
        <Route  path="/webapp" component={WebApp}/>  
        <Route  path="/vrar" component={VrAr}/>  
        <Route  path="/ecommerce" component={Ecommerce}/>  
        <Route  path="/internetofthings" component={InternetOfThings}/>  
        <Route  path="/artificialintelligence" component={ArtficialIntelligence}/>  
        <Route path="/sellerLogin" component={sellerLogin}/> 
        <Route path="/sellerSighnup" component={sellerSignup}/> 
        <Route path="/customerSignup" component={customerSignup}/> 
        <Route path="/customerLogin" component={customerLogin}/> 
          <Route path="/sellerProfile/:id/" component={sellerProfile}/>
        <Route path="/customerProfile/:id" component={customerProfile}/> 
        <Route path="/productDescription/:myid" component={ProductDescription}/> 
        <Route path="/cart" component={Cart}/> 
        <Route path="/contactus" component={Contactus}/> 
        <Route path="/postproducts/:proid" component={PostProduct}/> 
        <Route path="/customerSighnup" component={CustomerRegistartion}/> 
        <Route path="/newProductRequest/:cusNewReqId" component={NewProductRequest}/> 
        <Route path="/sellerProducts/:spid" component={sellerProducts}/> 
        <Route path="/Myrequests/:custReqid" component={MyRequests}/> 
        <Route path="/productCustomize/:customize" component={ProductCustomize}/> 
        <Route path="/forgotPassword" component={ForgotPassword}/> 
         <Route path="/reset/:token" component={ResetPassword}/> 
        <Route path="/sellerupdate/:updatedSellersId" component={ResetPassword}/>
        <Route path="/forgotPasswordCustomer" component={ForgotPasswordCustomer}/> 
         <Route path="/resetcustomer/:token" component={ResetPasswordCustomer}/> 
        <Route path="/customerupdate/:updatedCustomersId" component={ResetPasswordCustomer}/>
        
         <Route path="/texts" component={MaterialUiFields}/> 
        <Route path="/directbuy/:buyid" component={DirectBuy}/> 
        
        

        <ProtectedRoute exact path="/" component={App} />
        <Route path="*" component={() => "404 NOT FOUND"} />

        <Route path="/admin" component={AdminPanel}/> 

        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
