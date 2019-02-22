import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Grid,Row,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';


class sellerSignup extends Component {
constructor(){
    super();

    this.state = {
        users: [],
        password: '',
        email: '',
        sname: '',
        contact: '',
        address: ''
    }
    // this.gotoLogin = this.gotoLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getName = this.getName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getContact = this.getContact.bind(this);
    this.getAddress = this.getAddress.bind(this);

}

componentWillMount() {
    axios('http://localhost:7000/sellers/getseller')
      .then(res => {
        const users = res.data;
        console.log("users are : ",users)
        this.setState({ users });
      })
  }

  Postdata() {

    let userObject = {
      sname: this.state.sname,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address
    }

    axios.post('http://localhost:7000/sellers/postseller', userObject)
      .then(res => {
        console.log(res.data);
      });

      if(this.state.name === "" && this.state.email === "" && this.state.contact === "" && this.state.address === "" && this.state.password === "" ){
          alert('fields missing')
      }
      else{
      this.props.history.push('/sellerLogin');
      }
      console.log(userObject);
  }


    getEmail(e){
        this.setState({ email: e.target.value})
    }

    getName(e){
        this.setState({ sname: e.target.value})
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


    render() {
        console.log(this.state.users)
        return (
            <div className="login-bg">
           
              <Grid sm={12}>
                  <Row>
                      <Col> 
                      <Card className="login" style={{backgroundColor: '#00000085'}}>
            <div >
                <h1> Seller Form </h1> <hr/>
                <Form horizontal method="post" onSubmit={this.Postdata.bind(this)}>


                        <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="name" onChange={this.getName}/>
                        </Col>
                    </FormGroup>

                     
                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={this.getEmail}/>
                        </Col>
                    </FormGroup>

                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" onChange={this.getPassword} />
                        </Col>
                    </FormGroup>

                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>
                            contact
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="number" placeholder="contact" onChange={this.getContact}/>
                        </Col>
                    </FormGroup>


                       <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>
                            address
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="address" onChange={this.getAddress}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button  bsStyle="success" type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                    <Link to="/sellerLogin"> already have an account? login  </Link>
                </Form>
            </div>
            </Card>
                      </Col>
                      </Row> 
              </Grid>
        
            </div>
        );
    }
}

export default sellerSignup;