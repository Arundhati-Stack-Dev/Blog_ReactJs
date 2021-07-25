import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component{
    state={ clicked:0, toggle:"toggle", navigation:"navigation"};

    toggleMenu=()=>{
        if(this.state.clicked === 0){
            this.setState({
                toggle: this.state.toggle + " active",
                clicked:1,
                navigation:this.state.navigation + " active"
            });

        }else{
            this.setState({toggle:"toggle", clicked:0, navigation:"navigation"});
        }
    };
    render(){
       return(
           <div>
               <header>
                   <Link to="/" className="logo">Our Blog</Link>
                    <div className={this.state.toggle} onClick={this.toggleMenu}></div>
               </header>
               <div className={this.state.navigation}>
                   <ul>
                       <li>
                           <Link to="/" onClick={this.toggleMenu}>Home</Link>
                       </li>
                       <li>
                           <Link to="/about" onClick={this.toggleMenu}>About</Link>
                       </li>
                       <li>
                           <Link to="/article-list" onClick={this.toggleMenu}>articles</Link>
                       </li>
                       <li>
                           <Link to="/contact" onClick={this.toggleMenu}>Contact</Link>
                       </li>
                   </ul>
               </div>
               <ul className="sci">
                   <li>
                       <a>
                           <img src="/images/facebook.png"/>
                       </a>
                   </li>
                   <li>
                       <a>
                           <img src="/images/instagram.png"/>
                       </a>
                   </li>
                   <li>
                       <a>
                           <img src="/images/twitter.png"/>
                       </a>
                   </li>
               </ul>
           </div>
       );
    }
}

export default Navbar;