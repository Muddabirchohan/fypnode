import React,{Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';


export default class NewProductRequest extends Component{

constructor(){
    super();
    
this.state={
    description: '',
    category: ''

}
this.getCategory = this.getCategory.bind(this);
this.getDescription = this.getDescription.bind(this);
this.gotoNewProductRequest = this.gotoNewProductRequest.bind(this);
}

getCategory(e){
this.setState({category: e.target.value});
}

getDescription(e){
this.setState({description: e.target.value});
}
    

gotoNewProductRequest(e){

    e.preventDefault();

var customerNewRequest = {
    cusCuzReqId: this.props.match.params.cusNewReqId,
    productId: this.props.match.params.productId,
    newSoftwareDescription: this.state.description,
    category: this.state.category
}

console.log("customerNewRequest",customerNewRequest);
    axios.post('http://localhost:7000/customerRequest/postnew',customerNewRequest)
    .then(res => {
        console.log(res.data);
      });
}

    render(){
        console.log("customer", this.props.match.params.cusNewReqId,"product",this.props.match.params.productId)
    return(
        <div>
 <Card>
                <h2> S-BAY </h2>
                <form onSubmit={this.gotoNewProductRequest} method="post">

  <div class="form-group">
    <label for="description">description</label>
    <textarea class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter description" onChange={this.getDescription}/>
  </div>

  <div class="form-group">
    <select onChange={this.getCategory}> 
        <option value="WebApp"> web app </option>
        <option value="Android"> Android app</option>
        <option value="Ar/Vr">  AR/VR </option>
        <option value="Ecommerce"> Ecommerce </option>
        <option value="Iot"> Iot </option>
        <option value="Ai"> AI </option>
        
    </select>
      </div>
  <button class="btn btn-primary"> submit </button>
  <span>

  </span>
</form>
</Card>
        </div>
    )
}
}