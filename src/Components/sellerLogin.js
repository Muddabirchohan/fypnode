import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button,Grid,Row} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
import Slider3 from './slider3';
import auth from './Auth';
import profile from '../../src/assets/profile.jpg';
import TextField from '@material-ui/core/TextField';


var header = {
    'Content-Type': 'application/json',
    dataType:'jsonp',
    responseType:'application/json'
}

class Login extends Component {
constructor(props){
    super(props);
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

    axios.get("http://localhost:7000/sellers/getsellers")
      .then(res => {
        const users = res.data;
        console.log("users are : ",users)
         let array = Object.values(users);
        this.setState({ users: array });
      })
      
  }


  gotoLogin(e) {
      
    e.preventDefault();

 
    axios.get(`http://localhost:7000/sellers/${this.state.email}&${this.state.password}`)
    .then(res => {
      console.log(res.data);
        if(res.data.userStatus === "exist"){
          // auth.login(()=>{
          //   this.props.history.push(`/sellerProfile/${res.data.user._id}`);
          // })
          this.props.history.push(`/sellerProfile/${res.data.user._id}`);
        }
      // else if (this.state.users.map(obj=>obj.id !== res.data.user._id{
      // alert("not found");
      // }
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
            <div className="bg-seller-login">
            <Slider3/>
                 <Grid>
  {/* <Card style={{height: '400px'}}> */}
  <Row style={{paddingTop: '100px'}}>
    {/* <Col xs={12} sm ={12} md={4} lg={6}>
<img src={profile} width="300px" height="200px" style={{float: 'right'}} />
    </Col> */}

     {/* <Col xs={12} sm ={12} md={4} lg={12}>
     
     <img src="http://fillmurray.com/g/300/300" alt="user" id='image-preview' height="200px"/>
  
    </Col>  */}
     
    <Col xs={12} sm ={12} md={4} lg={12}>
    {/* <h2 > MEMBER LOGIN </h2> */}

    {/* <Card className="seller-products-list"> */}
             
                <form onSubmit={this.gotoLogin} method="post">

  <div class="form-group" >
    {/* <label for="email">email</label>
    <input type="email" class="form-control email-field" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail}/>
  */}
    <TextField
          id="standard-with-placeholder"
          label="enter email"
          placeholder="Placeholder"
          margin="normal"
          fullWidth="300px"
          type="email"
          onChange={this.getEmail}
        />
  </div>



  <div class="form-group" >

    <TextField
          id="standard-with-placeholder"
          label="enter password"
          placeholder="Placeholder"
          margin="normal"
          fullWidth="300px"
          type="password"
          onChange={this.getPassword}
        />
  </div>

{/* 
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control email-field" id="exampleInputPassword1" placeholder="Password" onChange={this.getPassword}/>
  </div> */}

  <button class="btn btn-primary">Login </button>
  <span>
  
  <Link to="/forgotPassword"> forgot password ? </Link>  <br/><br/>
  <Link to="/sellerSighnup"> register or sighnup </Link>
  </span>
</form>
{/* </Card> */}
    </Col>

    
    </Row>
    {/* </Card> */}
    </Grid>
          
            </div>
        );
    }
}

export default Login;