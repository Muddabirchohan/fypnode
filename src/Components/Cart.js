import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    
    console.log(this.props.cart)
    return (
       
      <div>
            <table>
                            <h2> Cart Items </h2>
                            <tr>
                                             </tr>
                        </table>
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