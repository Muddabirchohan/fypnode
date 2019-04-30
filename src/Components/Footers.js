import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import watch from './../assets/img2.jpg';
import jacket from './../assets/jacket.jpg';
import bulb from './../assets/bulb.jpg';
import perfume from './../assets/perfume.jpg';
import nailpolish from './../assets/nailpolish.jpg';
import shoe from './../assets/shoes.jpg';

export default class Footers extends Component {
  render() {
    return (
      <div className="footer-head">
                <h1> Contact us  </h1>

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
                    <Link to="#">works</Link>
                </div>
         </footer>
   
         
<div className="footer-bg"> 

{/* <Grid>
  <Row >

    <Col xs={12} sm ={12} md={6} lg={4}>
  
    <span className="dot">
       </span>
    </Col>

    <Col xs={12} sm ={12} md={6} lg={4}>
  
    <span className="dot">
    </span>
    </Col>

    <Col xs={12} sm ={12} md={6} lg={4}>
  
    <span className="dot">
     </span>
  </Col>
   
  </Row>
  </Grid>
       */}
  </div>  
        <div class="ninthSection">
            <h3>©2019	CSRD (CENTER FOR SOFTWARE RESEARCH & DEVELOPMENT )</h3>
            <h3> Made by The CSRD</h3>
        </div> 

      </div>
    )
  }
}
