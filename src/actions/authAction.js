import axios from 'axios';
import { returnErrors } from './errorAction';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SOCIALNETWOKR
} from './type';
export const loginFacebook =(loginUser,token) =>(dispatch,accessToken)=> {
  dispatch({
    type:"LOGIN_SOCIALNETWOKR",
    accessToken:token
  })
 axios.post("/login/facebook",loginUser)
 .then(res=>{
 })
};
export const loginGoogle =(loginUser,token) =>(dispatch,accessToken)=> {
  dispatch({
    type:"LOGIN_SOCIALNETWOKR",
    accessToken:token
  })
 axios.post("/login/google",loginUser)
 .then(res=>{
 })
};

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
// if(token){
//
// }
  axios
    .get('/authe', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.res.data, err.res.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = (newUser) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify(newUser);

  axios
    .post('/login/adduser',newUser)
    .then(res =>

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data

      })

    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = (loginUser) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify(loginUser);

  axios
    .post('/login/signin', loginUser, config)
    .then(res =>

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
      })

    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
