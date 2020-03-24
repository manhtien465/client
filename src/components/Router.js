import React, {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams
} from "react-router-dom";
import Blog from './header/blog'
import Contact from './header/Contact'
import AboutMe from './header/AboutMe'
import Main from './main'
import Post from './Post'
import MainDetail from './MainDetail'
import Login from './login'
import New from './Post/new'
import Edit from './Post/edit'
import uploadImage from './Post/uploadImage'
import EditDetail from './Post/EditDetail'
import signIn from './signin/signIn'
import signUp from './signin/signUp'
import BoxLish from './GraphQl/boxlish'
import Shopping from './shopping/shopping'
import Upload from "./shopping/upload/upload"
import detailProduct from './shopping/detail/detail'

const Routerr =() => {
  const dispatch=useDispatch()
  const token=useSelector(state=>state.authReducer.token)



      const ProtectRoute=({component:Component,...rest}) => {
        return <Route {...rest} render={(props)=>{

              if(token!==null){
               return  <Component {...props}/>
              }else{
                 return <Redirect to="/SignIn"/>

            }

          }}/>
      }
        return (

            <div id="main">
                 <Route exact path="/" component={Main}>

          </Route>
          <Route exact path="/blog" component={Blog}>

   </Route>
   <Route exact path="/admin/login/shopping/detail" component={detailProduct}>

   </Route>
   <Route exact path="/admin/login/shopping/upload" component={Upload}>

   </Route>S
   <Route exact path="/Contact" component={Contact}>

</Route>
<Route exact path="/About-me" component={AboutMe}>

</Route>
<Route exact path="/admin" component={Login}>

</Route>
<ProtectRoute exact path="/admin/edit" component={Post}></ProtectRoute>
<Route exact path="/admin/login/edit" component={Edit}>

</Route>
<Route exact path="/admin/login/shopping" component={Shopping}>

</Route>
<Route exact path="/admin/login/EditDetail" component={EditDetail}>

</Route>
<Route exact path="/admin/login/addnew" component={New}>

</Route>
<Route exact path="/admin/login/uploadImage" component={uploadImage}>

</Route>
<Route exact path="/detail" component={MainDetail}>

</Route>
<Route exact path="/SignIn" component={signIn}>

</Route>
<Route exact path="/SignUp" component={signUp}>

</Route>
<Route exact path="/BoxLish" component={BoxLish}>

</Route>


               </div>

        )
    }
    export default Routerr
