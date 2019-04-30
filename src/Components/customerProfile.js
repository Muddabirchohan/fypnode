import React,{component, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';
import Slider3 from './slider3';
import profile from '../../src/assets/profile.jpg';



 class customerProfile extends Component{

    constructor(){
        super();
        this.state = {
            customerProfile: {}
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        axios(`http://localhost:7000/customers/${id}`)
        .then(res =>{
            const user = res.data;
            this.setState({ customerProfile: user });
        })
    }

render(){
    const {customerProfile} = this.state;
    console.log(this.state.customerProfile)
    return(
        <div>
            <Slider3/>
       <Grid>
  <Row>

    <Col xs={12} sm ={12} md={6} lg={4}>
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">
            <img src={profile} alt="user"/>
            <p> name    :   {customerProfile.name} </p> 
            <p> Address :   {customerProfile.address} </p> 
            <p> Email   :   {customerProfile.email} </p> 
            <p> Contact :   {customerProfile.contact} </p> 
            <p> 
            <h2> 
            <Link to={`/Myrequests/${customerProfile._id}`}> my requests </Link>
            </h2> 
            </p>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    
    <Col xs={12} sm ={12} md={6} lg={8}> 
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">

            <h1> Wellcome {customerProfile.name} </h1>
            <h2>
            <Link to={`/newProductRequest/${customerProfile._id}`}> Request for new product </Link>
            </h2>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
    </Col>
    </Row>
</Grid>
        </div> 
    )
}

}

export default customerProfile