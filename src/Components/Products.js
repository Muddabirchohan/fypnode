import React, { Component } from 'react'
import {Card,CardActionArea,CardContent,Button} from '@material-ui/core'
import product from '../../src/assets/product.jpg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchproducts,addToCart,directBuyProduct } from '../actions/PostActions';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import top from '../assets/toparrow2.png';
import TextField from '@material-ui/core/TextField';

 class Products extends Component {  
    constructor(){
        super();
        this.state = {
          search: '',
          mysearches: false,
          filteredItmes: []
        }
    }

    componentDidMount(){
      this.props.fetchproducts();
  }


addCart(obj, _id){
  let {addedIds, addToCart} = this.props;
   if(addedIds.includes(_id)){
       alert('already exist')
   }else addToCart(obj, _id)
}

     searchData(e){
      
      this.setState({ search: e.target.value,mysearches: true})
      console.log(this.state.search);
      let filteredItmes=[];
      this.props.products.filter( obj =>{
        if(obj.pname.toLowerCase().includes(e.target.value.toLowerCase())){
          filteredItmes.push(obj);
          this.setState({
            filteredItmes,
            //  mysearches: !this.state.mysearches
          })
          console.log("filter done",filteredItmes)
        }
      })
    
    }

    // searchProduct(){
    //   console.log("works")
    //   let filteredItmes=[];
    //   this.props.products.filter( obj =>{
    //     if(obj.pname === this.state.search){
    //       filteredItmes.push(obj);
    //       this.setState({
    //         filteredItmes,
    //         mysearches: !this.state.mysearches
    //       })
    //       console.log("filter done",filteredItmes)
    //     }
    //   })
    // }

      // addToCart(obj){
  //   console.log(obj);
  //   let arr = [];
  //   arr.push(obj);
  //   this.setState({ cart: [...this.state.cart,arr]})
  //   console.log(this.state.cart);
  // }

  
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
    render() {
    let {mysearches,filteredItmes} = this.state;
        return (
          
<div className="My-products">
<h1> Ready To Sell Softwares </h1>
<div className="text-field">
    <TextField
          id="filled-search"
          label="search our featured products"
          type="search"
          variant="outlined"
          onChange={this.searchData.bind(this)}
        />    
        </div>
        
      <div className="cardAllign" id="products">
      
              {!mysearches &&
                 this.props.products.map((obj)=>{
          return(
      <div key={obj._id}>
    
    
    <div className="description" id='top'> 
      <Card className="card-style">
      <Link to={`/productDescription/${obj._id}` }>   
      <CardActionArea>
        <CardContent>
            <div>
            <img src={obj.screenShot}/>
<p> <h5> <b> {obj.pname}</b> </h5> </p>
<p> <h5>  {obj.cost}  </h5> </p>

 </div>
  </CardContent>
        </CardActionArea>
        </Link> 
        <Button variant="contained" color="primary" onClick={()=> this.addCart(obj,obj._id)}> Add <i class="fas fa-cart-plus"></i> </Button>   
        <Link to={`/directbuy/${obj._id}` }>
        {/* <Button variant="contained" color="primary" onClick={()=> this.props.directBuyProduct(obj,obj._id)}> Buy </Button>    */}
       </Link>
    </Card>
    </div> 
</div> 
         )      
     })}


     {mysearches && this.state.filteredItmes.map((obj) => {
       return(
         <div> 
   <Card className="card-style">
      <Link to={`/productDescription/${obj._id}` }>   
      <CardActionArea>
        <CardContent>
            <div>
            <img src={obj.screenShot}/>
<p> <h5> <b> {obj.pname}</b> </h5> </p>
<p> <h5>  {obj.cost}  </h5> </p>

 </div>
  </CardContent>
        </CardActionArea>
        </Link> 
        <Button variant="contained" color="primary" onClick={()=> this.addCart(obj,obj._id)}> Add <i class="fas fa-cart-plus"></i> </Button>   
    </Card>

         </div>
       )
     })}
    
</div>
</div>
    )
  }
}



const mapStateToProps = (state,dispatch) => ({
  products: state.posts.items,
  cart: state.posts.cart,
  addedIds: state.posts.addedIds,
})

export default connect(mapStateToProps, {fetchproducts,addToCart,directBuyProduct})(Products);
