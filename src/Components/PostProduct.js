import React  ,{Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Grid,Row,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Slider3 from './slider3';



const myurl = this;


 class PostProduct extends Component{
   constructor(){
     super();
     this.state = {
        seller_id:'',
        pname: '',
        category: '',
        pdescription: '',
        demovideourl: '',
        exeUrl: '',
        hostUrl: '',
        cost: '',
        screenShot: [],
        val: ''
     }
     this.postProduct = this.postProduct.bind(this);
   }


 
    
 
   postProduct(e){
     e.preventDefault();
      console.log("success",e);
      let userObject = {
        seller_id: this.props.match.params.proid,
        pname: this.state.pname,
        pdescription: this.state.pdescription,
        screenShot: this.state.screenShot,
        exeUrl: this.state.exeUrl,
        demoVideoUrl: this.state.demoVideoUrl,
        hostUrl: this.state.hostUrl,
        cost: this.state.cost,
        category: this.state.category,
      }
      
      axios.post('http://localhost:7000/products/postproduct',userObject)
      .then(res => {
        console.log("posted product",res.data);
      });

      if(this.state.pname === "" && this.state.pdescription === ""  && this.state.exeUrl === "" && this.state.demovideourl === "" && this.state.hostUrl === "" && this.state.cost === "" && this.state.category === ""){
          alert('fields missing')
      }
      else{
      this.props.history.push('/');
      }
      
   }


   getName(e){
     this.setState({pname: e.target.value});
   }

   getDescription(e){
     this.setState({pdescription: e.target.value});
   }

   
   getCost(e){
    this.setState({cost: e.target.value});
  }

  getDemoVideoUrl(e){
    this.setState({demoVideoUrl: e.target.value});
  }

  
  getExeUrl(e){
    this.setState({exeUrl: e.target.value});
  }

  getHostUrl(e){
    this.setState({hostUrl: e.target.value});
  }

  getCategory(e){
    console.log(e.target.value);
    this.setState({category: e.target.value});
  }

 getScreenShot(event){

  var CLOUDINARY_URL ="https://api.cloudinary.com/v1_1/chohan/upload";
  var CLOUDINARY_UPLOAD_PRESET="bhorijjp";

var file = event.target.files[0];
var formData = new FormData();
formData.append('file',file);
formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);

axios({
url: CLOUDINARY_URL,
method: 'POST',
data: formData
}).then(res => {
console.log("my response",res);
this.setState({ screenShot: res.data.secure_url})
}).catch(function(err){
console.log(err)
})

}

componentWillUnmount(){

}

    render(){
      console.log(this.state.screenShot)
        return(
            <div>
              <Slider3/>
                <Card className="post-product">
                <h2> Post Your product </h2>
              <form method="post" onSubmit={this.postProduct}>
  <div class="form-group">
    <label for="name">product name:</label>
    <input type="name" class="form-control" id="name" onChange={this.getName.bind(this)}/>
  </div>
 
  <div class="form-group">
    <label for="exeUrl">exeUrl:</label>
    <input type="text" class="form-control" id="exeUrl" onChange={this.getExeUrl.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="demovideourl">demovideourl:</label>
    <input type="text" class="form-control" id="demovideourl" onChange={this.getDemoVideoUrl.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="hostUrl">hostUrl:</label>
    <input type="text" class="form-control" id="hostUrl" onChange={this.getHostUrl.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="cost">cost:</label>
    <input type="text" class="form-control" id="cost" onChange={this.getCost.bind(this)}/>
  </div>

  <div class="form-group">
    <label for="pdescription">pdescription:</label>
    <input type="text" class="form-control" id="pdescription"onChange={this.getDescription.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="screenShot">screenShot:</label>
    <input type="file" class="form-control"  onChange={this.getScreenShot.bind(this)}/>
  </div>
  <div class="form-group">
    <label for="category">category:</label> <br/>
    <select onChange={this.getCategory.bind(this)}> 
    <option value=""> Select a Category </option>
        <option value="web"> web app </option>
        <option value="mobileapp"> mobile app </option>
        <option value="vr/ar"> vr/ar </option>
        <option value="ai"> ai </option>
        <option value="ecommerce"> ecommerce </option>
        <option value="iot"> iot </option>
        
        
        </select>
  </div>
  <div class="checkbox form-group">
    <label><input type="checkbox"/> Remember me</label>
  </div>

{this.state.screenShot!= '' && <button type="submit" class="btn btn-primary ">Submit</button>}
</form>
</Card>
                 </div>
        )
    }
}

export default PostProduct;