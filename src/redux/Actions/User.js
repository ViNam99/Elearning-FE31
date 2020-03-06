import USER_TYPE from "../Constants/User"
import { userService } from "../../Services";
import { createAction } from ".";
//async action
export const fetchCredentialAction = (value) => dispatch =>{
dispatch({
    type: USER_TYPE.FETCH_LIST_REQUEST
});
userService
.login(value)
.then(res=>{
    dispatch(createAction(USER_TYPE.FETCH_LIST_SUCCESS,res.data));
    console.log(res.data);
    console.log("dang nhap thanh cong")
})
.catch(err=>{
    dispatch(createAction(USER_TYPE.FETCH_LIST_FAILURE,err.data));
    console.log(err.response.data);
})
};
