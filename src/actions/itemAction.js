import{ GET_DATA__FROM__DB,GET_INFOR,GET_INFOR1}  from './type';
import axios from 'axios'
export const getdata =()=>(dispatch,getdata)=>{
  axios.get("/users").then(
    res=>{

      dispatch({type:GET_DATA__FROM__DB,
      getdata:res.data})

    }
  )

};
export const getinfor =(infor)=>(dispatch,getinfor)=>{

  dispatch({type:"GET_INFOR",
  getinfor:infor})
};
