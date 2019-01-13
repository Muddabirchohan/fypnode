import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
export default class Footers extends Component {
  render() {
    return (
      <div>
                <footer>
                <div>
                    <Link to="#">abc</Link>
                    <Link to="#">abc</Link>
                    <Link to="#">abc</Link>
                    <Link to="#">abc</Link>
                    <Link to="#">abc</Link>
                </div>
                <div>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                </div>
                <div>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                        <Link to="#">abc</Link>
                </div>
         </footer>
         <div class="eightSection">
             <span><i class="fab fa-instagram"></i></span>
             <span><i class="fab fa-twitter"></i></span>
             <span><i class="fab fa-facebook-f"></i></span>
             <span><i class="fab fa-snapchat-ghost"></i></span>
         </div>
          
        
        <div class="ninthSection">
            <div>© 2019	Quizworks B.V. Oude Delft 48, 2611 CD Delft, The Pakistan</div>
            <div >Made with <span class="size"><i class="fas fa-heart"></i></span> by The CSRD</div>
        </div>

      </div>
    )
  }
}
