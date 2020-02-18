
import{ GET_DATA__FROM__DB,GET_INFOR,GET_INFOR1}  from '../actions/type';
var oldstate={
     data:[],
     infor:{},
     infor1:{},

}


export default function itemReducer(state=oldstate,action){

      switch (action.type) {

              case GET_INFOR:
              return {...state,infor:action.getinfor
              }
              case GET_INFOR1:
              return {...state,infor1:action.getinfor1
              }
              case GET_DATA__FROM__DB:
              return {...state,data:action.getdata
              }
          default:
          return state
              break;
      }


}
