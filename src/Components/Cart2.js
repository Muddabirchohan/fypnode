import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Table,Button,Grid,Col,Row} from 'react-bootstrap';
import { removeFromCart } from '../actions/PostActions';
import { number } from 'prop-types';
import Slider3 from './slider3';
import Card from '@material-ui/core/Card';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';


class Cart extends Component {
constructor(props){
  super(props);

  const array = props.cart.map(() => {
    return 0;
  });
this.state ={
  value: '',
  netAmountArray: array,
  setInvoice: false,
  total: ''
}
this.handleChange = this.handleChange.bind(this);
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
    this.props.history.goBack()
  }
}


componentDidMount()
{
  let myarray= [];
 var total =  this.props.cart.map((obj)=>{
  myarray.push(obj.cost);

  })
  console.log("hello",myarray.reduce((a, b) => a + b, 0));
}

  render() {
    var count = 0, temp = 0;
    const totalPrice = this.state.netAmountArray.map(elm=>(
      temp+=elm
    ));
  

        return (

    <div>
     <Grid>
  <Row>
  {this.props.cart.map((obj,index)=>{
     return(
      <div className="cart2"> 
<Col xs={12} sm ={12} md={6} lg={2}> 
<p> 
<img src={obj.screenShot} height="100px"/>
    </p>
    </Col>

    <Col xs={12} sm ={12} md={6} lg={2}> 
   <p> 
    {obj.pname} 
    </p>
    </Col>
    
    <Col xs={12} sm ={12} md={6} lg={2}> 
    <p> 
    <input type="number" id={index} onChange={this.handleChange}/>
    </p> 
    </Col>
    
    <Col xs={12} sm ={12} md={6} lg={2}>
    <p> 
    {this.state.netAmountArray[index]}
    </p> 
     </Col>

     <Col xs={12} sm ={12} md={6} lg={2}>
     <p> 
     {obj.cost}
     </p> 
     </Col>

     <Col xs={12} sm ={12} md={6} lg={2}>
     <p> 
     <Button bsStyle="danger" id={obj._id} onClick={this.handleDelete.bind(this,index)}>  Delete </Button> 
     </p> 
     </Col>
          </div>
     )
   })}
    
    </Row>
    </Grid>
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


export default connect(mapStateToProps,{removeFromCart})(withRouter(Cart));