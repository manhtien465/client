
import React, { Component } from 'react'
import logo from '../images/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Menu from "./header/menu"
import Routerr from "./Router/Router"
class Headers extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render () {
    return (
      <div id="header">
           <div id="header__logo">
             <div id="header__logo--img">
                <a href="/"><img src={logo} alt="" /> </a>
             </div>
           </div>
           <div id="header__menutop">
           <div id="header__menutop--social">
             <a href="https://www.facebook.com/tien.nguyenmanh.465"><i className="fab fa-instagram" /></a>
             <a href="https://www.instagram.com/tien_xoay//"><i className="fab fa-facebook-f" /></a>
           </div>
           <Routerr></Routerr>

           </div>
        </div>
    )
  }
}

export default Headers;
