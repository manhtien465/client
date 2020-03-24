import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
class Menu extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render () {
    return (

      <div id="header__menutop--menu--detail">

        <div id="contact"><Link to="/blog">Blog</Link></div>
        <div id="contact"><Link to="/About-me">About Me</Link> </div>
        <div id="contact"><Link to="/Contact">Contact</Link></div>
        <div id="contact"><Link to="/SignIn">Sign in</Link></div>
        </div>
      
    )
  }
}

export default Menu;
