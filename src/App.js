import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Categories from './Components/Categories';
import CategoriesList from './Components/CategoriesList';
import Products from './Components/Products';
import Header2 from './Components/Header2';


class App extends Component {
  render() {
    return (
      <div>
         {/* <Header/> */}
         <Header2/>
         <Slider/>
         <CategoriesList/>
         <br/><br/>
         {/* <Categories/> */}
         <Products/>
      </div>
    );
  }
}

export default App;
