import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button,Grid,Row} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';


class Login extends Component {
constructor(){
    super();

    this.state = {
        users: [],
        password: '',
        email: '',
        activeUserId: null
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
      
    let { users } = this.state;
    console.log(users);
    var flg = false;
    e.preventDefault();
   users.map((obj) => {
      if (obj.email === this.state.email && obj.pass === this.state.password) {
        this.setState({ change: !this.state.change })
        flg = false
        alert("successfull");
        }
        if(flg === false){
            this.setState({ activeUserId: obj._id});
            this.props.history.push(`/sellerProfile/${this.state.activeUserId}`)
        }
      else if (flg === true) {
        alert('user not found ');
        flg = false;
      }
    })

    e.preventDefault();

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
            <div className="login-bg">
           
            <Grid>
                <Row> 
                    <Col sm={12}>
            <Card className="login" style={{backgroundColor: '#00000085'}}>
            <div >
                <h1> Login Form </h1> <hr/>
                <Form horizontal onSubmit={this.gotoLogin}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={this.getEmail}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" onChange={this.getPassword} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button  bsStyle="success" type="submit">Login</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            <Link to="/sellerSighnup"> register or sighnup </Link>
            </Card>
            </Col>
            </Row>
            </Grid>
            </div>
        );
    }
}

export default Login;