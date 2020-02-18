import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
class Login extends Component {
  constructor(props){
    super(props)
    this.state={
token:null
    }
  }
  ip =(event) => {
  console.log(event.target.value);
     const value=event.target.value
     const name=event.target.name
     this.setState({
       [name]:value
     });

    }
  login =  async (event) => {

      const res=await  axios
    .post("/authe/add",
{email:this.state.email,
passwork:this.state.passwork})
    .then(res=>{
      localStorage.setItem('usertoken', res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
    console.log(this.state.token);


    }



  render () {
    return (
      <div id="login">
        <form onSubmit={this.login} action="/admin/edit">
          <label for="">Email</label>
          <input onChange={(event)=>this.ip(event)} type="text" name="email"/>
          <label for="">passwork</label>
          <input onChange={(event)=>this.ip(event)} type="text" name="passwork"/>
          // <Link to="/admin/edit" onClick={(event)=>this.login(event)}>submit</Link>
            <button  type="submit" name=""  >log in</button>
        </form>
         </div>
    )
  }
}

export default Login;
