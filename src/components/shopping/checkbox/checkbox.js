import React, { Component,useEffect,useState} from 'react'

import {connect, useSelector,useDispatch} from 'react-redux';
import {getfulldata,checkedData,getdata} from '../../../actions/shoppingAction'
import PropTypes from 'prop-types'
const CheckBox=(props)=>{
  const ArrPrice=[
    {
      "name":"Any",
      "array":[]
    },
    {
      "name":"$0 to $200",
      "array":[0,200]
    },
    {
      "name":"$200 to $400",
      "array":[200,400]
    },
    {
      "name":"$400 to $600",
      "array":[400,600]
    },
    {
      "name":"$600 to $800",
      "array":[600,800]
    },
    {
      "name":"$800 to $1000",
      "array":[800,1000]
    },
    {
      "name":"$1000 to $1200",
      "array":[1000,1200]
    },
  ]
  const  idChecked=useSelector(state=>state.shoppingReducer.idCheck)
  const[Checked,setChecked]=useState([])
  const[CheckedRadio,setCheckedRadio]=useState('0')
  const [Skip,setSkip]=useState(0)
  const [Limit,setLimit]=useState(8)
  const [Filters, setFilters] = useState({
    city:[],
    price:[]
  })
const dispatch=useDispatch()
const data=useSelector(state=>state.shoppingReducer.city)
useEffect(()=>{
  dispatch(getfulldata())

},[])
const toggleChecked=(value) => {

  const currenlyIndex=Checked.indexOf(value)
  const  newChecked=[...Checked]
  if(currenlyIndex===-1){
    newChecked.push(value)
  }
  else{
    newChecked.splice(currenlyIndex,1)
  }
  setChecked(newChecked)
  //goi
  const newFilters={...Filters}
  newFilters.city=newChecked
setFilters(newFilters)
  const variables={
    skip:0,
    limit:Limit,
    filters:newFilters
  }
dispatch(getdata(variables))
setSkip(0)
  // dispatch(checkedData(newChecked))
}
const toggleRadio=(value) => {
  setCheckedRadio(value)
  console.log(CheckedRadio);
}
const loadCity=data.map((index,key)=>{
  return(

    <div style={{marginLeft:"30px",display:"flex",marginTop:"20px"}}>
<input name='city' onChange={(value)=>toggleChecked(index.city)} type="checkbox"

/>
<span style={{whiteSpace:"nowrap"}}>{index.city}</span>
</div>

  )
})
const loadPrice=ArrPrice.map((index,key)=>{
  return(
    <div name={key} style={{marginLeft:"30px",display:"flex",marginTop:"20px"}}>
    <input type="radio" onChange={(value)=> toggleRadio(index.array)} name={index.name} value />
    <span style={{whiteSpace:"nowrap"}}>{index.name}</span>
</div>
  )
})

    return (
<div style={{display:"flex"}}>
      <div style={{display:"flex", flexWrap:"wrap",width:"50%",marginTop:"50px",border:"1px solid lightgray"}}>
      {loadCity}

    </div>

    <div style={{display:"flex", flexWrap:"wrap",width:"50%",marginTop:"50px",border:"1px solid lightgray"}}>

    {loadPrice}

  </div>

    </div>
    )
  }

export default CheckBox;
