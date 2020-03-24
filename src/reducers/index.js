import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import{getItems} from '../actions/itemAction'
import shoppingReducer from "./shoppingReducer"
export default combineReducers({
  itemReducer:itemReducer,
  errorReducer:errorReducer,
  authReducer:authReducer,
  shoppingReducer:shoppingReducer
})
