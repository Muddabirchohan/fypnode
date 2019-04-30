import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Slider3 from './slider3';
import {Link} from 'react-router-dom';


export default class ForgotPassword extends Component {
  constructor(){
    super();
    this.state = {
       email: ''
    }
}


componentDidMount(){



}

getEmail(e){
    this.setState({ email: e.target.value})
}
  render() {
    return (

      <div>
  <Card className="login-seller">
                <h2> Forget Password </h2>
                <form onSubmit={this.gotoLogin} method="post">

  <div class="form-group">
    <label for="email">email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail}/>
  </div>

</form>
</Card>
      </div>
    )
  }
}
