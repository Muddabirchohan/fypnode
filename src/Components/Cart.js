import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Table,Button} from 'react-bootstrap';
import { removeFromCart } from '../actions/PostActions';



class Cart extends Component {

  componentDidMount(){
    this.props.removeFromCart();
  }
  render() {
    
    console.log("hello" ,this.props.cart)
    return (
     
      

      <div>
        <h2 style={{textAlign: 'center'}}> Cart Component </h2> 
        <Table responsive>
  <thead>
    <tr>
       <th>Id</th>
      <th>Name</th>
      <th>Description </th>
      <th>Demo Video Url</th>
      <th>Cost</th>
      <th>Exe Url</th>
      <th>Category</th>
      <th>Remove</th>
      
    </tr>
  </thead>
  <tbody>
   
   {this.props.cart.map((obj)=>{
     return(
       <tr>
            <td> {obj._id} </td> 
         <td> {obj.pname} </td> 
         <td> {obj.pdescription} </td> 
         <td> {obj.demoVideoUrl} </td> 
         <td> {obj.cost} </td> 
         <td> {obj.exeurl} </td> 
         <td> {obj.category} </td> 
         <td> <Button onClick={()=> this.props.removeFromCart(obj)}>  Delete </Button> </td> 
       </tr> 
     )
   })}
     
  
  </tbody>
</Table>
       {/* {
          this.props.cart.map((product)=>{
            return(
              <div> 

              </div>
            )
          }
          )
        } */}
      </div>
                       
    )
  }
}




const mapStateToProps = (state) => {
    return {
        cart: state.posts.cart,
    }
}


export default connect(mapStateToProps,{removeFromCart})(Cart);