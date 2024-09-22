import { USER_LOGIN_ERROR,USER_LOGIN_REQUEST
,USER_LOGIN_SUCCESS,
USER_REGISTER_ERROR,
USER_LIST_REQUEST,
USER_REGISTER_SUCCESS,
USER_REGISTER_REQUEST ,
USER_CLEAR_STATE,
 USER_LIST_SUCCESS, 
 USER_DELETE_REQUEST,
  USER_DELETE_ERROR,
  USER_DELETE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_UPDATE_SUCCESS
} from "../type/userType";



const initialState = {
    loader:false,
    status:"",
    message:"",
    data:[],
    error:"",
    pagesCount:""
}


const userReducer = (state=initialState,action)=>{
      switch(action.type){

        case USER_REGISTER_SUCCESS:
         
          return {
            ...state,
            loader:false,
            error:"",
            data:action?.userData?.data,
            status:action?.userData?.status,
            message:action?.userData?.message
          }
          case USER_REGISTER_REQUEST:
          return {
            ...state,
            loader:true,
            error:"",
            status:"",
            message:""
          }
        case USER_CLEAR_STATE:
          return {
            ...state,
            loader:false,
            error:"",
            status:"",
            message:""
          }
        case USER_LOGIN_REQUEST:
         return {
            ...state,
            loader:true,
            error:"",
            status:"",
            message:""
         }
        case USER_REGISTER_ERROR:
        //  console.log("USER_REGISTER_ERROR user reducer",action.userRes)
          return {
            ...state,
            loader:false,
            error:action.userRes,
            status:"",
            message:""
          }
        case USER_LOGIN_SUCCESS:
          
        return {
            ...state,
            loader:false,
            error:"",
            data:action.loginData,
            status:action.loginData.status,
            message:action.loginData.message
        }
      case USER_LOGIN_ERROR:
        return {
            ...state,
            loader:false,
            error:action.err,
        }
      case USER_LIST_REQUEST :
        return {
          ...state,
          loader:true,
        }
      case USER_LIST_SUCCESS :
       
        return {
          ...state,
          loader:false,
          status:"",
          data:action?.userData?.data,
          pagesCount:action?.userData?.totalCount,
        }

      case USER_DELETE_REQUEST:
        return {
          ...state,
          loader:true,
          error:"",
          message:""

        }
      case USER_DELETE_SUCCESS:
        console.log(" user delete reducer",action.userData)
        return {
          ...state,
          status:action?.userData?.status,
          message:action?.userData?.message,
          loader:false
        }
      case USER_DELETE_ERROR:
        return {
          ...state,
          loader:false,
          status:"",
          message:"",
          error:action?.userData?.error
        }
      case USER_UPDATE_ERROR:
        return {
          ...state,
          loader:false,
          status:"",
          message:"",
          error:action?.userData?.error
        }
      case USER_UPDATE_SUCCESS :
        return {
          ...state,
          status:action?.userData?.status,
          message:action?.userData?.message,
          loader:false
        }
      default :
      return {
        ...state
      }
      }
}


export default userReducer