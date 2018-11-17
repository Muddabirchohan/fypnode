import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import MobileApp from './Components/MobileApp';
import WebApp from './Components/WebApp'; 
import VrAr from './Components/VrAr';
import Ecommerce from './Components/Ecommerce';
import InternetOfThings from './Components/InternetOfThings';
import ArtficialIntelligence from './Components/ArtificialIntelligence';

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
        
        
              
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
