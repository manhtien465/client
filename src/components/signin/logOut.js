import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <a style={{width:"150px",height:"50px",display:"flex",alignItems:"center",color:"black",backgroundColor:"rgb(224, 233, 224)"}} onClick={this.props.logout} href='#'>
          Logout
        </a>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
