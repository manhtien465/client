import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Menu from '../header/menu'
import ShoppingHeader from '../header/shoppingHeader'

class Routerr extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render () {
    return (
      <div id="header__menutop--menu">
      <Route  path="/" component={Menu}>

</Route>
<Route exact path="/admin/login/shopping/" component={ShoppingHeader}>

</Route>
<Route exact path="/admin/login/shopping/detail" component={ShoppingHeader}>

</Route>
<Route exact path="/admin/login/shopping/upload" component={ShoppingHeader}>

</Route>

      </div>
    )
  }
}

export default Routerr;
