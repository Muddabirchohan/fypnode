import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    
    console.log(this.props.cart)
    return (
       
      <div>
       {
          this.props.cart === undefined ? 
          <i class="fas fa-spinner fa-spin fa-4x"></i> : 
          this.props.cart.map((product)=>{
            return(
              <div> 
                  {product[2].name}
              </div>
            )
          }
          )
        }
      </div>
                       
    )
  }
}




const mapStateToProps = (state) => {
    return {
        cart: state.posts.cart,
    }
}


export default connect(mapStateToProps)(Cart);