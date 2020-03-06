import USER_TYPE from "../Constants/User"
import { userService } from "../../Services";
import { createAction } from ".";
//async action
export const fetchCredentialAction = (value, history) => dispatch => {
    dispatch({
        type: USER_TYPE.FETCH_LIST_REQUEST
    });
    userService
        .login(value)
        .then(res => {
            localStorage.setItem('userLogin', JSON.stringify(res.data));
            dispatch(createAction(USER_TYPE.FETCH_LIST_SUCCESS, res.data));
            console.log(res.data);
            console.log("dang nhap thanh cong");
            if (res.data.maLoaiNguoiDung === "GV") {
                history.replace("/admin");
                console.log("Ban la Giang Vien");
            } else {
                history.replace("/");
                console.log("Ban la Hoc Vien");

            }
        })
        .catch(err => {
            dispatch(createAction(USER_TYPE.FETCH_LIST_FAILURE, err.data));
            console.log(err.response.data);
        })
};
export const postCredentialAction = (value) => dispatch => {
    dispatch({
        type: USER_TYPE.FETCH_LIST_REQUEST
    });
    userService
        .signup(value)
        .then(res => {
            dispatch(createAction(USER_TYPE.FETCH_LIST_SUCCESS, res.data));
            console.log(res.data);
            console.log("dang ky thanh cong")
        })
        .catch(err => {
            dispatch(createAction(USER_TYPE.FETCH_LIST_FAILURE, err.data));
            console.log(err.response.data);
        })
}
