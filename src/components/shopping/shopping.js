import React, { Component } from 'react'

import Header1 from "./header/header"
import Bodyy from './body/body'
import CheckBox from "./checkbox/checkbox"
class Shopping extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render () {
    return (
      <div>
      
       <CheckBox></CheckBox>
       <Bodyy></Bodyy>
      </div>
    )
  }
}

export default Shopping;
