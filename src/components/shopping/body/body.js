import React, {useEffect,useState} from 'react'
import ImgSlider from "./imgSlider"
import SearchBox from "../searchBox/searchBox"
import {connect,useSelector,useDispatch} from 'react-redux';
import {getdata,getdatadetail} from '../../../actions/shoppingAction'
import PropTypes from 'prop-types'
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Body =(props)=> {

const[data,setdata]=useState([])
  const[dataimg,setdataimg]=useState()
  const [Skip,setSkip]=useState(0)
  const [Limit,setLimit]=useState(8)
  const[PostSize,setPostSize]=useState(0)
  const [Filters, setFilters] = useState({
    countries:[],
    price:[]
  })

const datass=useSelector(state=>state.shoppingReducer.data)
// const dataChecked=useSelector(state=>state.shoppingReducer.isCheck)

const dispatch=useDispatch()
  useEffect(()=>{
    const variables={
      skip:Skip,
      limit:Limit,
      loadMore:true,
    }
dispatch(getdata(variables))
// handleFilters()


  },[])
//   const handleFilters=() => {
//
// }

  const Loadmore=() => {
    let skip=Skip + Limit
    const variables={
      skip:skip,
      limit:Limit,
      loadMore:true,
    }
  dispatch(getdata(variables))
  }
const Getdatadetail=(detail) => {
  dispatch(getdatadetail(detail))
}

const LoadData=datass.map((index,key)=>{
      return(
        <div className="cart">
          <Link to="/admin/login/shopping/detail" onClick={(detail)=>Getdatadetail(index)} >
          <div  style={{width:"200px",height:"120px"}}className="cart__box">
            <ImgSlider images={index.img}></ImgSlider>
         <div className="cart__box--city">{index.city}</div>
         <div classname="cart__box--price">{index.price}</div>

          </div>
          </Link>
        </div>


      )
    })
    return (
      <div>
         <SearchBox ></SearchBox>
      <div id="bodyshopping" >
          {LoadData}

         </div>

         <button style={{display:"block",marginLeft:"45%",padding:"5px 10px",marginTop:"40px"}} onClick={Loadmore}>See more ...</button>
          </div>
    )

}


export default Body;
