import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import {gql} from 'apollo-boost'
import {flowRight as compose} from 'lodash';
import{graphql} from 'react-apollo'
import book from './book'
import{addBookMutation,getAuthorsQuery} from "../../quyries/quyries"

class BoxLish extends Component{
  constructor(props){
    super(props)
    this.state={
     data:[],
    }
  }

  onChange=(e)=>{

        const value=e.target.value
        const name=e.target.name
    this.setState({
      [name]:value
    });
  }
  submit=(e) => {
  e.preventDefault();

  this.props.addBookMutation({
    variables:{
     name:this.state.name,
       genre: this.state.genre,
       authorId:this.state.authorId
    }
  })
  }
  displayAuthor=() => {
    var data=this.props.getAuthorsQuery
    if(data.loading){
      return(
        <option disabled>Loading Author...</option>
      )
    }else{
      return data.authors.map(author=>{
        return(
          <option key={author.id} value={author.id}>{author.name}</option>
        )
      })
    }
  }
  render () {
console.log(this.props);
    return (


      <div>
        <div className="book">



        </div>
        <div>import books</div>
        <form onSubmit={this.submit} >
          <label for="">name</label>
          <input type="text" name="name"  onChange={(e)=>this.onChange(e)}/>
          <label for="">genre</label>
          <input type="text" name="genre"  onChange={(e)=>this.onChange(e)}/ >

            <select onChange={(e)=>this.onChange(e)} class="" name="authorId">
              <option value=""></option>
              {this.displayAuthor()}
            </select>
    <button >send</button>
           </form>


      </div>



    )
  }
}

export default compose(
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation,{name:"addBookMutation"})
)(BoxLish)
