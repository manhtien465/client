import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logout from './logOut'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login, register, loginGoogle, loginFacebook} from '../../actions/authAction';
import {clearErrors} from '../../actions/errorAction';
//facebook --login
import FacebookLogin from "react-facebook-login"
import GoogleLogin from 'react-google-login';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
      msg: null,
      //facebook
      isLoggedIn: false,
      isLoggedIngg: false,
      userid: "",
      name: "",

      picture: ""
    }
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    loginFacebook: PropTypes.func.isRequired,
    loginGoogle: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
    const {error, isAuthenticated} = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({msg: error.msg.msg});
      } else {
        this.setState({msg: null});
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
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {

    const {password, email} = this.state;
    const loginUser = {
      password,
      email
    };
    this.props.login(loginUser);
     if(this.props.token==null || this.props.token=="undefined"){
       e.preventDefault()
     }

  };
  //Facebook LOGIN
  responseFacebook = (response) => {
    console.log(response);
    this.setState({username: response.name, userid: response.id, email: response.email});
    const {username, userid, email} = this.state;
    const loginUser = {
      username,
      userid,
      email
    };
    this.props.loginGoogle(loginUser, response.accessToken)
  }

  //GOOGLE LOGIN

  responseGoogle = (response) => {


    this.setState({name: response.profileObj.name, userid: response.profileObj.googleId});

    const {name, userid} = this.state;
    const loginUser = {
      name,
      userid
    };
    this.props.loginGoogle(loginUser, response.tokenObj.access_token)
  }

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (<FacebookLogin appId="227272431761352"

       autoLoad={false}
       fields="name,email,picture"
       onClick={this.componentClicked}
       callback={this.responseFacebook}/>)
    }
    //gogle
    let ggContent;
    if (this.state.isLoggedIngg) {
      ggContent = null;
    } else {
      ggContent = (<GoogleLogin autoLoad={false}
         clientId="691715230068-828msuqjgtsr403ab51dhbbhp8t3fvt7.apps.googleusercontent.com"
         buttonText="Login"
         style={{width:"200px",height:"50px"}}
         onSuccess={this.responseGoogle}
         onFailure={this.responseGoogle}
         cookiePolicy={'single_host_origin'}/>)
    }
    return (<div className="signIn">
      <form className="signIn__form" active="/admin/edit">
        <div className="signIn__form--header">SIGN IN</div>
        <label for="email">Email Adress</label>
        <input onChange={(e) => this.onChange(e)} type="text" name="email" placeholder="Email "/>
        <label for="passwork">Passwork</label>
        <input onChange={(e) => this.onChange(e)} type="password" name="password" placeholder="Password"/>

        <a href="/admin/edit" type="submit" clasName="signIn__form--btn" onClick={this.onSubmit}>SING IN</a>
        <div className="">
          Don't have acount
          <Link to="/SignUp">SIGN UP</Link>

        </div>
      </form>
<div style={{display:"flex"}}>
    <div
      className="facebook">{fbContent}</div>

    <div > {ggContent}</div>
    </div>

      <Logout></Logout>
    </div>);
  }
}
const mapStateToProps = state => ({isAuthenticated: state.authReducer.isAuthenticated, error: state.error, token: state.authReducer.token});
export default connect(mapStateToProps, {login, clearErrors, loginFacebook, loginGoogle})(SignIn);
