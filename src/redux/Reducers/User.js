import USER_TYPE, { SAVE, DELETE } from "../Constants/User";
const initialState = {
    credentials:null
}
const userReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case USER_TYPE.FETCH_LIST_SUCCESS:
            state.credentials=action.data
            return {...state}
        case SAVE:
            return {
                  ...state,
                  user: action.user
                };
        case DELETE:
            return {};
        default :  
            return state ;
    }
}
export default userReducer;