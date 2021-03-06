import React, { Component } from 'react'
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import {Grid,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class CategoriesList extends Component {
  render() {
    return (
      <div class="list-categories">

<h1> Software Categories  </h1>

       <Grid style={{paddingBottom: '1em'}}>
  <Row className="show-grid">
 
    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="/mobileapp"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent >
            <div className="icons">
            <i class="fas fa-mobile-alt fa-3x" ></i> 
            <p> Mobile App</p> 
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </Link>

    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="webapp"> 
    <Card>
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>

  <div className="icons">
      <i class="fab fa-chrome fa-3x"></i>
      
      <p> Web Apps </p> 
      </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
   
      </CardActions>
    </Card>
    </Link>
    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="vrar"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
       
        <div className="icons">
        <i class="fas fa-vr-cardboard fa-3x"></i>
        <p> VR/AR </p> 
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
    </Link>
    </Col>
  </Row>
  </Grid>



       <Grid>
  <Row className="show-grid">
    
  

    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="artificialintelligence"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
       
        <div className="icons">
        <i class="fas fa-brain fa-3x"></i>
        <p> AI</p> 
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
    </Link>
    </Col>



    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="ecommerce"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
       
        <div className="icons">
        <i class="fas fa-cart-plus fa-3x"></i>
        <p> Ecommerce </p> 
        </div>

        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </Link>
    </Col>

    <Col xs={4} sm ={4} md={4} lg={4}>
    <Link to="internetofthings"> 
    <Card >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className="icons">
        <i class="fas fa-code-branch fa-3x"></i>
        <p> IOT </p> 
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Link>
    </Col>
  </Row>
  </Grid>
      </div>
    )
  }
}
