import React, { Component } from 'react'
import {Card,CardActionArea,CardContent,Button} from '@material-ui/core'
import product from '../../src/assets/product.jpg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchproducts,addToCart } from '../actions/PostActions';

 class Products extends Component {
  
    // constructor(){
    //     super();
    //     this.state = {
    //         products: [],
    //         productDescription: [],
    //         cart: []
    //     }
    //     this.getDescription = this.getDescription.bind(this);
    // }

       constructor(){
        super();
        this.state = {
            cart: []
        }
     
    }


    componentDidMount(){
      this.props.fetchproducts();
  }


  //before redux
  // componentDidMount(){

  //   axios.get(`http://localhost:7000/products/getproducts`)
  //   .then(res => {
  //     const products = res.data;
  //     console.log(products);
  //     this.setState({ products });
  //   })
  // }


  //before redux
//   getDescription(obj,id){
//     console.log(obj);
//     console.log(id);
//  let pd = this.state.productDescription;
//   pd.push(obj);
//    this.setState({ productDescription: pd})
//   }



// from redux store
addCart(obj, _id){
  let {addedIds, addToCart} = this.props;
   if(addedIds.includes(_id)){
       alert('already exist')
   }else addToCart(obj, _id)
}


  // addToCart(obj){
  //   console.log(obj);
  //   let arr = [];
  //   arr.push(obj);
  //   this.setState({ cart: [...this.state.cart,arr]})
  //   console.log(this.state.cart);
  // }
    render() {
    // console.log(this.state.products)
        return (


//           <div> 


 
//           {this.props.products.map((obj)=>{
//             return(
//               <div className="main-column">
//               <div>
//               <img class="card-img-top" src="" alt="Cardcap"/>
//               <div class="card-body" className="mid-col">
//               {obj.pname}
//               </div>

// <div className="sidebar-one">
// 1
//   </div> 


// <div className="sidebar-two">
// 2
//   </div> 


// <div className="sidebar-three">
// 3
//   </div> 

//               <a href="works" class="btn btn-primary">Go somewhere</a>
//               </div>
//               </div>
//             )
//           })}
  

//           </div>


      <div  className="cardAllign" id="products">
              {
          this.props.products === undefined ? 
          <i class="fas fa-spinner fa-spin fa-4x"></i> : 
          this.props.products.map((obj)=>{
          return(
      <div key={obj._id}>
    
      <Card className="card-style">
      <CardActionArea>
        <CardContent>
            <div>
            <img src={product} alt="profile" width="150" height="150"/>
<p> <h2> <b> {obj.category}</b> </h2> </p>
<p> <h4>  {obj.cost}  </h4> </p>

 <Button variant="contained" color="primary" onClick={()=> this.addCart(obj,obj._id)}> Add </Button> 

<Link to={`/productDescription/${obj._id}`}>  Description </Link>
  </div>
  </CardContent>
        </CardActionArea>
    </Card>
  
</div> 
         )      
     })}  
</div>
    )
  }
}



const mapStateToProps = (state,dispatch) => ({
  products: state.posts.items,
  cart: state.posts.cart,
  addedIds: state.posts.addedIds,
})

export default connect(mapStateToProps, {fetchproducts,addToCart})(Products);
