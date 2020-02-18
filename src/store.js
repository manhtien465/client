import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
var redux=require('redux');
var oldstate={

}
const middleware=[thunk]

var store1=createStore(rootReducer,oldstate,compose(
  applyMiddleware(...middleware)
))
store1.subscribe(() => console.log(JSON.stringify(store1.getState())))
// store1.dispatch(getItems())
export default store1;
