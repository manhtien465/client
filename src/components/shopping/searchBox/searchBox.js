import React, { useEffect,useState} from 'react'
import {Input} from "antd"
import 'antd/dist/antd.css';
import {getdata} from '../../../actions/shoppingAction'
import {connect,useSelector,useDispatch} from 'react-redux';
const {Search} =Input
const SearchBox =(props)=>{
  const [Skip,setSkip]=useState(0)
  const [Limit,setLimit]=useState(8)
  const[PostSize,setPostSize]=useState(0)
  const [searchterm, setsearchterm] = useState()
  const [Filters, setFilters] = useState({
    countries:[],
    price:[]
  })

const dispatch=useDispatch()
const onChange=(event)=>{
  const newSeacrchterm=event.target.value
    const variables={
      skip:Skip,
      limit:Limit,
  
    searchterm:newSeacrchterm
    }
    setSkip(0)
    setsearchterm(newSeacrchterm)
    dispatch(getdata(variables))
}

  return(
    <div className="search" style={{display:"flex",marginLeft:"78%",marginTop:"30px",width:"17%"}}>
      <Search

        onChange={(event)=>onChange(event)}
        placeholder="Search By tying..."


      >

      </Search>

    </div>
  )
}



export default SearchBox;
