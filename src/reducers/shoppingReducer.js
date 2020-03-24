import{ GET_DATA,GET_DATA_FULL,GET_DATA_CHECKED,GET_DATA1,GET_DATA_DETAIL}  from '../actions/type';
const initialState = {
data:[],
idCheck:[],
city:[],
dataProductDetail:{},
dataAddToCard:[]
};

export default function(state=initialState,action){
  switch (action.type) {
    case "GET_DATA":
    return {
      ...state,data:[...state.data,...action.payload]
    }
    case "GET_DATA1":
    return {
      ...state,data:action.payload
    }
    case 'GET_DATA_FULL':
    return{
      ...state,city:action.payload
    }
    case "GET_DATA_CHECKED":
    return{
      ...state,idCheck:action.payload
    }
    case "GET_DATA_DETAIL":
    return{
      ...state,dataProductDetail:action.payload
    }
    case "ADD_TO_CARD":
    return{
      ...state,dataAddToCard:action.payload
    }


    default:
    return state

  }
}
