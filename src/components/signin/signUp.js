import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';
class SignUp extends Component {
    constructor(props) {
        super(props);
          this.state={
            modal: false,
    username: '',
    email: '',
    password: '',

    msg: null,
    errorpassworkagain:"",
    errorpasswork:"",
          }
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
      };

      componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
          if (error.id === 'REGISTER_FAIL') {
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
        if(this.state.password.length<8){
            e.preventDefault();
          this.setState({
            errorpasswork:"passwork must be more than 8 character"
          });
        }
        if(this.state.password!==this.state.passwordagain){
            e.preventDefault();
          this.setState({
            errorpasswordagain: "password not the same "
          });
        }else{
          this.setState({
            errorpasswordagain:null
          });
        }

        const { username,password,email } = this.state;


        const newUser = {
          username,
          password,
            email,
        };

        // Attempt to register
        this.props.register(newUser);
        console.log(newUser);
      };

    render() {

        return (
            <div className="signUp">
                <form className="signUp__form" onSubmit={this.onSubmit}>
                    <div className="signUp__form--header">SIGN UP</div>
                  <label for="username">Username</label>
                  <input  onChange={(e)=>this.onChange(e)} type="text" name="username" placeholder="Username" />

                  <label for="password">Passwork</label>
                  <input onChange={(e)=>this.onChange(e)} type="password" name="password" placeholder="Password" />
                  <div>{this.state.errorpasswork}</div>
                <label for="">Passwork again</label>
                  <input  onChange={(e)=>this.onChange(e)} type="password" name="passwordagain" placeholder="Password again" />
                   <div>{this.state.errorpassworkagain}</div>
                  <label for="">Email Adress</label>
                    <input  onChange={(e)=>this.onChange(e)} type="text" name="email" placeholder="Email"/>
                  <button type="submit" name="button">Register</button>

                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.error
});
export default connect(
  mapStateToProps,
  { register, clearErrors }
)(SignUp);
