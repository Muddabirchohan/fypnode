import React, { Component } from 'react';
import './index.css';
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
import CardTwo from './Components/CardTwo';
import ReactDOM from 'react-dom';
import TopButton from "./Components/TopButton";
import top from './assets/toparrow2.png';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import CollapsingNavbar from './Components/CollapsingNavbar';

let lastScrollY = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width: 0,
        height: 0,
        offset: 0,
        show: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}
componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);

    var rect = ReactDOM.findDOMNode(this)
        .getBoundingClientRect();
    this.setState({
        offset: rect
    })
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
    this.setState({
        width: window.innerWidth,
        height: window.innerHeight
    });
}

handleScroll = () => {
    lastScrollY = window.scrollY;
    console.log("scroll",lastScrollY)
    if(lastScrollY > this.state.height){
        let x= document.getElementById("btn");
        x.style.display= 'inline';
    }
    else{
        let x= document.getElementById("btn");
        x.style.display= 'none';
    }
}

  render() {
    return (
      <div id='top'>


 {/* <CollapsingNavbar/> */}
        <Slider3 />
         <Slider />
         <hr/> 
         <CategoriesList/>
         <hr/>

          <Products id='products'/>
          <hr/>
         <Footers id='footers'/> 
       
         <div className="css3-notification">   

         <AnchorLink href='#top'>
          <img className="topbutton" id="btn" src={top} width="35px"/>
          </AnchorLink> 
                  
                  
        </div>
      </div>
    );
  }
}

export default App;
