import React,{Component} from 'react';
import './../App.css';
import {Grid,Col,Row,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';

class TopButton extends Component{

    render(){
        return(
            <div>
                <a href="#top">
                <Button className="topbutton" id="btn"> top </Button>
                </a>
            </div>
        )
    }

}

export default TopButton;