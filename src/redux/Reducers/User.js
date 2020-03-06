import USER_TYPE from "../Constants/User";
const initialState = {
    credentials:null
}
const userReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case USER_TYPE.FETCH_LIST_SUCCESS:
            state.credentials=action.data
            console.log(state.credentials);
            return {...state}
        default :  
            return state ;
    }
}
export default userReducer;