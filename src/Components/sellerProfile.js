import React,{component, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';
import profile from '../../src/assets/profile.jpg';
import Header2 from './Header2';
 class sellerProfile extends Component{

    constructor(){
        super();
        this.state = {
            sellerProfile: {}
        }
    }

    componentDidMount(){
        
        const { id } = this.props.match.params;
        
        axios.get(`http://localhost:7000/sellers/${id}`)
        .then(res =>{
            console.log(res.data);
            const user = res.data;
            this.setState({ sellerProfile: user });
        })

//         fetch(`http://localhost:7000/sellers/${id}`,{  credentials: 'include' })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//     this.setState({ sellerProfile: myJson });
//   });
    }

render(){
    const {sellerProfile} = this.state;
    return(
        <div>
            <Header2/>
       <Grid>
  <Row>

    <Col xs={4} sm ={12} md={4} lg={4}>
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">
            <img src={profile} alt="user"/>
            <p> name    :   {sellerProfile.name} </p> 
            <p> Address :   {sellerProfile.address} </p> 
            <p> Email   :   {sellerProfile.email} </p> 
            <p> Contact :   {sellerProfile.contact} </p> 
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={8}> 
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">
     
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

export default sellerProfile