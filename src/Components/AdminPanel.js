import React, { Component } from 'react';
import axios from 'axios';
import {Table,Button,Grid,Col,Row} from 'react-bootstrap';
import Slider3 from './slider3';


class AdminPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    

    componentDidMount(){
        axios.get('http://localhost:7000/products/getproducts')
        .then(res => {
            this.setState({ products: res.data})
        })
    }
    
    deleteProduct(id){
            axios.delete(`http://localhost:7000/products/${id}`)
            .then(res => {
                console.log("res",res)
            })
    }

    approve(id){

          
      axios.patch(`http://localhost:7000/products/${id}`)
      .then(res => {
          res.status = "approved"
      console.log(res)
    })
      
    }
    render() {
        console.log(this.state.products)
        return (
            <div>
                <Slider3/>
                <Grid> 

                    <Row>
                        <Col lg={12}>
                        {this.state.products.map((obj,index)=>{
                    return(
                        <div key={index} > 
                                  <tr>
        
        <td> <img src={obj.screenShot} height="100px"/></td> 
         <td> {obj.pname} </td> 
         <td> {obj.cost} </td>  
         <td> <Button onClick={this.deleteProduct.bind(this,obj._id)}> delete product </Button></td>
         <td> <Button onClick={this.approve.bind(this,obj._id)}> approve  </Button></td>

       </tr> 
                        </div>
                    )
                })} 
                </Col>
                         </Row>
                </Grid>
               
            </div>
        );
    }
}

export default AdminPanel;