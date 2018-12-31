import React,{component, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';

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
    return(
        <div>
       <Grid>
  <Row className="show-grid">

    <Col xs={4} sm ={12} md={4} lg={4}>
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">
            <img src="" alt="user"/>
            <p> {customerProfile.sname} </p> 
            <p> {customerProfile.address} </p> 
            <p> {customerProfile.email} </p> 
            <p> {customerProfile.contact} </p> 
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={8}> 
    <CardActionArea>
        <CardContent >
            <div className="icons">
            <p> {customerProfile.sname} </p> 
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Col>
    </Row>
</Grid>
        </div> 
    )
}

}

export default customerProfile