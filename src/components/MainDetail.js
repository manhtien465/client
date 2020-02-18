import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
class MainDetail extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render () {
    console.log(this.props.itemReducer);
    return (
       <div className="MainDetail">

      <div className="MainDetail__title">
<h2>{this.props.itemReducer.title}</h2>
      </div>
     <div className="MainDetail__content">
<p>{this.props.itemReducer.content}</p>
     </div>

        </div>

    )
  }
}
MainDetail.propTypes={

  itemReducer:PropTypes.object.isRequired
}
const mapStateToProps = (state, ownProps) => {
return {
itemReducer: state.itemReducer.infor
};
};

export default connect(mapStateToProps)( MainDetail);
