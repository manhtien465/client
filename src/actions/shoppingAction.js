import axios from 'axios';
import {useState} from "react"
import {GET_DATA,GET_DATA1,GET_DATA_FULL,GET_DATA_CHECKED,GET_DATA_DETAIL,ADD_TO_CARD} from "./type"

export const getdata=(variables)=>(dispatch,payload)=>{
  axios.post("/shopping/display",variables)
  .then(res=>{
    if(variables.loadMore){
      dispatch({type:GET_DATA,
        payload:res.data.shopping
      })
    }else{
      dispatch({type:GET_DATA1,
        payload:res.data.shopping
      })
    }

  })
}
export const getfulldata=()=>(dispatch,payload)=>{

    axios.post("/shopping/displayfull")
    .then(res=>{
  dispatch({type:GET_DATA_FULL,
        payload:res.data.shopping
      })
    })
  }
  export const checkedData=(data)=>(dispatch,payload)=>{
    dispatch({
      type:GET_DATA_CHECKED,
      payload:data
    })
  }

  export const getdatadetail=(variables)=>(dispatch,payload)=>{
    dispatch({
      type:GET_DATA_DETAIL,
      payload:variables
    })
  }
  export const addToCard=(variables)=>(dispatch,payload)=>{
    dispatch({
      type:ADD_TO_CARD,
      payload:variables
    })
  }
