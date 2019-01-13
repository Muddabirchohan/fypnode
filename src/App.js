import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Categories from './Components/Categories';
import CategoriesList from './Components/CategoriesList';
import Products from './Components/Products';
import Header2 from './Components/Header2';
import FrontTop from './Components/FrontTop';
import PrimarySearchAppBar from './Components/Slider2';
import Slider3 from './Components/slider3';
import Footers from './Components/Footers';
import Categories2 from './Components/Categories2';

class App extends Component {
  render() {
    return (
      <div>
         {/* <Header/> */}
         {/* <Header2/> */}
         {/* <PrimarySearchAppBar/> */}
         {/* <FrontTop/> */}
        <Slider3/>
         <Slider/> 
         <CategoriesList/>
         {/* <Categories2/> */}
         <br/><br/>
         {/* <Categories/> */}
         <Products/>
         <Footers/>
      </div>
    );
  }
}

export default App;
