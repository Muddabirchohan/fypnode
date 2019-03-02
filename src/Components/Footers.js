import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
// import { Grid } from '@material-ui/core';
import {Grid,Col,Row} from 'react-bootstrap';


export default class Footers extends Component {
  render() {
    return (
      <div>


        <footer>
                <div>
                
                    <Link to="#">technologies</Link>
                    <Link to="#">office</Link>
                    <Link to="#">tel</Link>
                    <Link to="#">work</Link>
                </div>
                <div>
                  
                    <Link to="#">web Srvices</Link>
                    <Link to="#">android apps</Link>
                    <Link to="#">vr/ ar</Link>
                    <Link to="#">tel</Link>
                    <Link to="#">ecommerce apps </Link>
                </div>
                <div>
                 
                    <Link to="#">as a seller</Link>
                    <Link to="#">as a developer</Link>
                    <Link to="#">as a customer</Link>
                    <Link to="#">work</Link>
                </div>
         </footer>
   
          
        
        <div class="ninthSection">
            <div>© 2019	CSRD (CENTER FOR RESEARCH & DEVELOPMENT )</div>
            <div >Made with <span class="size"><i class="fas fa-heart"></i></span> by The CSRD</div>
        </div>

      </div>
    )
  }
}
