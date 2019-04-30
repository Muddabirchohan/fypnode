import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
import Header2 from './Header2';
import '../App.css';
import '../index.css';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/PostActions';



 class ProductCustomize extends Component {
    constructor(){
        super();
        
    this.state={
        description: '',
        category: '',
        budget: ''
    }
    this.getCategory = this.getCategory.bind(this);
    this.getDescription = this.getDescription.bind(this);
    }
    
    getCategory(e){
    this.setState({category: e.target.value});
    }
    
    getDescription(e){
    this.setState({description: e.target.value});
    }
    
    getBudget(e){
        this.setState({ budget: e.target.value})
    }

componentDidMount(){
    console.log(this.props.match.params.customize)
}

CustomizeProductRequest(e){
    
    e.preventDefault();

    var CustomizeCustomizeRequest = {
    cuzDescription: this.state.description,
     productId: this.state.budget
}

    // axios.post('http://localhost:7000/newRequest/postnew',CustomizeCustomizeRequest)
    // .then(res => {
    //     console.log("new req",res.data);
    //   }).catch(console.log("errr"));
}
 
    render(){
        return(
            <div>
             hello {this.props.customize}

             <div className="container"> 
 <Card>
                <form onSubmit={this.CustomizeProductRequest} method="post">
  <div class="form-group form-elements">
  
    <i class="fas fa-file-alt fa-3x"></i>
    <textarea 
    class="form-control"
     id="exampleInput"
      aria-describedby="emailHelp"
       placeholder="Enter description"
        onChange={this.getDescription}
        />
  </div>
<hr/>
   <button class="btn btn-primary"> submit </button>

</form>
</Card>

</div>



            </div> 
        )
    }
}



export default ProductCustomize;