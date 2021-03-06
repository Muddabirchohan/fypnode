import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
import Slider3 from './slider3';

export default class CustomerRegistartion extends Component {
    constructor(){
        super();
    
        this.state = {
            users: [],
            password: null,
            email: null,
            name: null,
            contact: null,
            address: null
        }
        // this.gotoLogin = this.gotoLogin.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getName = this.getName.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getContact = this.getContact.bind(this);
        this.getAddress = this.getAddress.bind(this);
        this.Postdata = this.Postdata.bind(this);
    
    }
    
    componentWillMount() {
        axios.get('http://localhost:7000/customers/postcustomer')
          .then(res => {
            const users = res.data;
            console.log("users are : ",users)
            this.setState({ users });
          })
      }
    
      Postdata() {
    
        let userObject = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          contact: this.state.contact,
          address: this.state.address
        }
    
        axios.post('http://localhost:7000/customers/postcustomer', userObject)
          .then(res => {
            console.log(res.data);
          });
    
          if(this.state.name === "" && this.state.email === "" && this.state.contact === "" && this.state.address === "" && this.state.password === "" ){
              alert('fields missing')
          }
          else{
          this.props.history.push('/customerLogin');
          }
          console.log(userObject);
      }
    
    
        getEmail(e){
            this.setState({ email: e.target.value})
        }
    
        getName(e){
            this.setState({ name: e.target.value})
        }
    
        getContact(e){
            this.setState({ contact: e.target.value})
        }
    
         getAddress(e){
            this.setState({ address: e.target.value})
        }
         
        getPassword(e){
        this.setState({ password: e.target.value})
        }
    
    render(){
        return(
            <div>
            <Slider3/>
                 <Card className="post-product">
                 <h2> S-BAY </h2>
                 <form onSubmit={this.Postdata} method="post">
   <div class="form-group">
     <label for="name">name</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={this.getName}/>
   </div>
 
   <div class="form-group">
     <label for="email">email</label>
     <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getEmail}/>
   </div>
 
   <div class="form-group">
     <label for="name">contact</label>
     <input type="number" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter ccontact" onChange={this.getContact}/>
   </div>
 
   <div class="form-group">
     <label for="name">address</label>
     <input type="text" class="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="Enter contact" onChange={this.getAddress}/>
   </div>
 
 
   <div class="form-group">
     <label for="exampleInputPassword1">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.getPassword}/>
   </div>
   <Link to="/customerLogin" style={{marginLeft: '50px' }}> go to Login </Link>
   <button class="btn btn-primary" style={{marginTop: '20PX'}}>Submit</button>
 </form>
 </Card>
 </div>
        )
    }
}