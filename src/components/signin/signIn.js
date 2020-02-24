import React, { useState, useEffect, useCallback, Component } from 'react';
import {  Link } from "react-router-dom";
import Logout from './logOut'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from "query-string";
import axios from 'axios';
import {login,register,loginFacebook } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';
//facebook --login
import FacebookLogin  from "react-facebook-login"
import GoogleLogin from 'react-google-login';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
          modal: false,
      email: '',
      password: '',
      msg: null,
      //facebook
      isLoggedIn:false,
      isLoggedIngg:false,
      userID:"",
      username:"",

      picture:""
        }
      }
      static propTypes = {
      isAuthenticated: PropTypes.bool,
      error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    loginFacebook: PropTypes.func.isRequired,
      register: PropTypes.func.isRequired,
      clearErrors: PropTypes.func.isRequired
      };
      componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
          if (error.id === 'LOGIN_FAIL') {
            this.setState({ msg: error.msg.msg });
          } else {
            this.setState({ msg: null });
          }
        }

        // If authenticated, close modal
        if (this.state.modal) {
          if (isAuthenticated) {
            this.toggle();
          }
        }
      }

      toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
          modal: !this.state.modal
        });
      };

            onChange = (e) => {
              this.setState({ [e.target.name]: e.target.value });
            };
      onSubmit = e => {

const { passwork,email } = this.state;
const loginUser = {
  passwork,
    email,
};
  this.props.login(loginUser);
      };
      //Facebook
  responseFacebook = (response) => {

  this.props.loginFacebook(response.accessToken)
}
      componentClicked=() => {
        console.log("click");
      }
      //google response
     responseGoogle = (response) => {
  console.log(response);
}
componentDidMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
}
loginsocial=() => {
  axios
  .get("/login/google")
  .then(res=>{
    console.log(res);
  })

}
    render() {
      let fbContent;
      if(this.state.isLoggedIn){
        fbContent=null;
      }else{
        fbContent=(
          <FacebookLogin
    appId="227272431761352"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
        )
      }
      //gogle
      let ggContent;
      if(this.state.isLoggedIngg){
        ggContent=null;
      }else{
      ggContent=(
        <GoogleLogin
   clientId="691715230068-828msuqjgtsr403ab51dhbbhp8t3fvt7.apps.googleusercontent.com"
   buttonText="Login"
   onSuccess={this.responseGoogle}
   onFailure={this.responseGoogle}
   cookiePolicy={'single_host_origin'}
 />
        )
      }
        return (
            <div className="signIn">
                <form class="signIn__form"active="/admin/edit" >
                  <div className="signIn__form--header">SIGN IN</div>
                  <label for="email">Email Adress</label>
                  <input  onChange={(e)=>this.onChange(e)} type="text" name="email" placeholder="Email " />
                    <label for="passwork">Passwork</label>
                    <input onChange={(e)=>this.onChange(e)} type="password" name="passwork" placeholder="Passwork"/>

                  <Link to="/admin/edit" clasName="signIn__form--btn"  onClick={this.onSubmit} >SING IN</Link>
                  <div className="">  Don't have acount
                  <Link to="/SignUp">SIGN UP</Link>

                  </div>
                </form>
              <a href="#" > {fbContent}</a>
              <a href="#"onClick={()=>this.loginsocial()}> {ggContent}</a>
                <Logout></Logout>
            </div>
        );
    }
}
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.error,
  token:state.authReducer.token
});
export default connect(
  mapStateToProps,
  { login, clearErrors,loginFacebook }
)(SignIn);
