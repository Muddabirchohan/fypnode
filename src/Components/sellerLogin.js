import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button,Grid,Row} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
import Slider3 from './slider3';

var header = {
    'Content-Type': 'application/json',
    dataType:'jsonp',
    responseType:'application/json'
}

class Login extends Component {
constructor(){
    super();
    this.state = {
        users: [],
        password: '',
        email: '',
        activeUser: {}
    }
    this.gotoLogin = this.gotoLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);

}

componentDidMount() {

    axios.get("http://localhost:7000/sellers/getseller")
      .then(res => {
        const users = res.data;
        console.log("users are : ",users)
         let array = Object.values(users);
        this.setState({ users });
      })
      
  }


  gotoLogin(e) {
      
    e.preventDefault();
    console.log("hello", this.state.email, this.state.password);
   
    axios.get(`http://localhost:7000/sellers/${this.state.email}&${this.state.password}`)
    .then(res => {
        console.log("hello rehan",res)
        if(res.data.userStatus === "exist"){
            console.log(res.data.user._id);
        this.props.history.push(`/sellerprofile/${res.data.user._id}`);
        }
        else{
            alert("authentication failed");
        }
    });

  }
  

    getEmail(e){
        this.setState({ email: e.target.value})
    }

    getPassword(e){
    this.setState({ password: e.target.value})
    }
    render() {
        console.log(this.state.users)
        return (
            <div>
           
           <Slider3/>
           <Card className="login-seller">
                <h2> S-BAY </h2>
                <form onSubmit={this.gotoLogin} method="post">

  <div class="form-group">
    <label for="email">email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail}/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.getPassword}/>
  </div>
  <button class="btn btn-primary">Login </button>
  <span>
  <Link to="/sellerSighnup"> register or sighnup </Link>
  </span>
</form>
</Card>
            </div>
        );
    }
}

export default Login;