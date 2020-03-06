import USER_TYPE from "../Constants/User";
const initialState = {
    credentials:null
}
const userReducer = (state = initialState, action)=>{
    console.log(action.data);
    switch(action.type){
        case USER_TYPE.FETCH_LIST_SUCCESS:
            state.credentials=action.data
            return {...state}
        default :  
            return state ;
    }
}
export default userReducer;