import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Logout from './logOut'
class SignIn extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div id="signIn">
                <form class="">
                  <label for="">Email Adress</label>
                  <input type="text" name="passwork" value=""/>
                  <label for="">Passwork</label>
                  <input type="text" name="passwork" value=""/>
                  <button type="submit" name="button">login</button>
                  <div class="">  Don't have acount
                  <Link to="/SignUp">Sign up</Link>
                  </div>
                </form>
                <Logout></Logout>
            </div>
        );
    }
}

export default SignIn;
