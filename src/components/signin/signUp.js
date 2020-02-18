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
    name: '',
    email: '',
    password: '',
    msg: null
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
        e.preventDefault();

        const { username, passwork,passworkagain,email } = this.state;

        // Create user object
        const newUser = {
          username,
          passwork,
          passworkagain,
            email,
        };

        // Attempt to register
        this.props.register(newUser);
        console.log(newUser);
      };

    render() {
        return (
            <div id="signUp">
                <form class=""onSubmit={this.onSubmit}>
                  <label for="">Username</label>
                  <input  onChange={(e)=>this.onChange(e)} type="text" name="username" />

                  <label for="">Passwork</label>
                  <input onChange={(e)=>this.onChange(e)} type="text" name="passwork" />
                  <label for="">Passworkagain</label>
                  <input  onChange={(e)=>this.onChange(e)} type="text" name="passworkagain" />
                    <label for="">Email Adress</label>
                    <input  onChange={(e)=>this.onChange(e)} type="text" name="email" />
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
