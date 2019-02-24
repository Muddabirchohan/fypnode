import React  ,{Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Grid,Row,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Slider3 from './slider3';



 class PostProduct extends Component{

    render(){
        return(
            <div>
              <Slider3/>
                <Card className="post-product">
                <h2> Post Your product </h2>
              <form action="">
              {/* <div class="form-group">
    <label for="sellerid">Seller Id:</label>
    <input type="sellerid" class="form-control" id="sellerid"/>
  </div> */}
  <div class="form-group">
    <label for="name">product name:</label>
    <input type="name" class="form-control" id="name"/>
  </div>
 
  <div class="form-group">
    <label for="exeUrl">exeUrl:</label>
    <input type="text" class="form-control" id="exeUrl"/>
  </div>
  <div class="form-group">
    <label for="demovideourl">demovideourl:</label>
    <input type="text" class="form-control" id="demovideourl"/>
  </div>
  <div class="form-group">
    <label for="hostUrl">hostUrl:</label>
    <input type="text" class="form-control" id="hostUrl"/>
  </div>
  <div class="form-group">
    <label for="cost">cost:</label>
    <input type="text" class="form-control" id="cost"/>
  </div>

  <div class="form-group">
    <label for="pdescription">pdescription:</label>
    <input type="text" class="form-control" id="pdescription"/>
  </div>
  <div class="form-group">
    <label for="screenShot">screenShot:</label>
    <input type="file" class="form-control" id="screenShot"/>
  </div>
  <div class="form-group">
    <label for="category">category:</label>
    <select> 
        <option value="webapp"> web app </option>
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
  <button type="submit" class="btn btn-primary ">Submit</button>

</form>
</Card>
                 </div>
        )
    }
}

export default PostProduct;