import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Table,Button,Grid,Col,Row} from 'react-bootstrap';
import { removeFromCart } from '../actions/PostActions';
import { number } from 'prop-types';
import Slider3 from './slider3';
import Card from '@material-ui/core/Card';


class Cart extends Component {
constructor(props){
  super(props);

  const array = props.cart.map(() => {
    return 0;
  });
this.state ={
  value: '',
  netAmountArray: array,
  setInvoice: false
}
this.handleChange = this.handleChange.bind(this)
}

  componentDidMount(){
    this.props.removeFromCart();
  }


  handleChange(event){
    const index = event.target.id;
    const netAmount = event.target.value * this.props.cart[index].cost;
    const localArray = this.state.netAmountArray;
    localArray[index] = netAmount;
    this.setState({
      netAmountArray: localArray
    });
    console.log(
      index,netAmount,localArray,
      this.state.netAmountArray)
  }

  handleDelete(index, event, value){
    var localArray = this.state.netAmountArray;
    localArray.splice(index, 1);
    this.setState({netAmountArray: localArray});
    this.props.removeFromCart(event.target.id);
  }
  

  generateInvoice(){
this.setState({ setInvoice: !this.state.setInvoice})
  }


componentWillMount(){
  if(this.props.cart.length===0){
    alert("cart empty");
    this.props.history.push('/')
  }
}

  render() {
    var count = 0, temp = 0;
    const totalPrice = this.state.netAmountArray.map(elm=>(
      temp+=elm
    ));
  

        return (

    <div>
    {this.props.cart!==0 && <div>
        <Slider3/>
      
        <Table responsive>
  <thead>
    <tr>
    <th>Image</th>
      <th>Name</th>
      <th>Cost</th>
      <th>quantity</th>
      <th>total cost</th>
      <th>Remove</th>
      
    </tr>
  </thead>
  <tbody>
   
   {this.props.cart.map((obj,index)=>{
     return(
       <tr>
        
        <td> <img src={obj.screenShot} height="100px"/></td> 
         <td> {obj.pname} </td> 
         <td> {obj.cost} </td>  
         <td> <input type="number" id={index} onChange={this.handleChange}/> </td> 
         <td> {this.state.netAmountArray[index]}</td> 
         <td> <Button bsStyle="danger" id={obj._id} onClick={this.handleDelete.bind(this,index)}>  Delete </Button> </td> 
       </tr> 
     )
   })}
  
     {/* <div style={{textAlign: 'center'}}>
       <h3> Total Price </h3>
       <h5> {totalPrice[(totalPrice.length)-1]} </h5>
     </div> */}
  
  </tbody>
    {/* {this.props.cart.length!==0 && <Button onClick={this.generateInvoice.bind(this)}> Generate Invoice </Button> } */}
    <Button onClick={this.generateInvoice.bind(this)}> Generate Invoice </Button>

</Table>


{this.state.setInvoice &&
<div> 
  <Card className="invoice">
<h3> Invoice </h3>
<Grid>
  
  {this.props.cart.map((obj,index)=>{
     return(
      <Row>
         <Col>  {obj.pname} </Col> 
         <Col> {obj.cost} </Col>          
          <Col> {this.state.netAmountArray[index]}</Col> 
          </Row>
     )
   })}
 
   </Grid>

     <p> total : {totalPrice[(totalPrice.length)-1]} </p>
     </Card>
</div>

}
      </div>
}
</div>         
    )
  }
}

const mapStateToProps = (state) => {
    return {
        cart: state.posts.cart,
        cartcounter: state.posts.cartcounter
    }
}


export default connect(mapStateToProps,{removeFromCart})(Cart);