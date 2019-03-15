import React, { Component } from 'react';
import axios from 'axios';
import {Table,Button,Grid,Col,Row} from 'react-bootstrap';


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
    render() {
        console.log(this.state.products)
        return (
            <div >
                <Table responsive>
                {this.state.products.map((obj,index)=>{
                    return(
                        <div key={index} > 
                                  <tr>
        
        <td> <img src={obj.screenShot} height="100px"/></td> 
         <td> {obj.pname} </td> 
         <td> {obj.cost} </td>  
         <td> <Button onClick={this.deleteProduct.bind(this,obj._id)}> delete product </Button></td>
       </tr> 
                        </div>
                    )
                })}
                </Table>
            </div>
        );
    }
}

export default AdminPanel;