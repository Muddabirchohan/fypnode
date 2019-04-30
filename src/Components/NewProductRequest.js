import React,{Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Slider3 from './slider3';


export default class NewProductRequest extends Component{

constructor(){
    super();
    
this.state={
    description: '',
    category: '',
    budget: ''
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

getBudget(e){
    this.setState({ budget: e.target.value})
}

gotoNewProductRequest(e){

    e.preventDefault();

var customerNewRequest = {
    cusNewReqId: this.props.match.params.cusNewReqId,
    newSoftwareDescription: this.state.description,
    category: this.state.category,
    budget: this.state.budget
}

    axios.post('http://localhost:7000/newRequest/postnew',customerNewRequest)
    .then(res => {
        console.log("new req",res.data);
      }).catch(console.log("errr"));
}

    render(){
        // console.log("customer", this.props.match.params.cusNewReqId,"product",this.props.match.params.productId)
    return(
        <div className="newpro">
<Slider3/>

<h3> What Service Are You Looking For? </h3>
<hr/>
<div className="container"> 
 <Card>
 <p>  Describe the service you're looking to purchase - please be as detailed as possible:</p>
                <form onSubmit={this.gotoNewProductRequest} method="post">
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
  <div class="form-group form-elements">
 <p>  Choose a Catgeory:</p>

  <i class="fas fa-folder-open fa-3x"></i>
    <select onChange={this.getCategory}> 
    <option value=""> Select a Category </option>
        <option value="Web App"> web app </option>
        <option value="Android App"> Android App </option>
        <option value="Ios App"> Ios App </option>
        <option value="Android/Ios App"> Android/Ios App </option>
        <option value="VR"> VR </option>
        <option value="AR"> AR </option>
        <option value="AI"> AI </option>
        <option value="Ecommerce"> Ecommerce </option>
        <option value="IOT"> IOT </option>
        
    </select>

<hr/>
      </div>


      <div className="form-group form-elements"> 
            <p> What is the budget for this service ? </p>
  <i class="fas fa-hand-holding-usd fa-3x"></i>
        <input type="number" onChange={this.getBudget.bind(this)}/> 

      </div>


  <button class="btn btn-primary"> submit </button>
  <span>

  </span>
</form>
</Card>
</div>
        </div>
    )
}
}