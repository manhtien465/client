
import React, {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/authAction'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


const ShoppingHeader=() => {
  const dispatch=useDispatch()
const logOut=() => {
  dispatch(logout())
}
    return (
      <div id="shoppingheader">

              <div id="contact"><Link to="/history">History</Link></div>
              <div id="contact"><Link to="/admin/login/shopping/upload"><i class="fas fa-upload"></i></Link> </div>
              <div id="contact"><Link to="/Contact">
              <div id="notification">
              <i class="fas fa-cart-plus"></i>
              <span>1</span>
              </div></Link>
              </div>
              <div id="contact"><Link to="/SignIn" onClick={()=>logOut}>Log out</Link></div>
      </div>
    )

}

export default ShoppingHeader;
