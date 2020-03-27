import USER_TYPE from "../Constants/User"
import { userService } from "../../Services";
import { createAction } from ".";
import {alertNotify, alertYesNo} from '../../Utils/alert';
//async action
export const SignInAction = (value, history) => dispatch => {
    dispatch({
        type: USER_TYPE.FETCH_LIST_REQUEST
    });
    userService
        .login(value)
        .then(res => {
            localStorage.setItem('userLogin', JSON.stringify(res.data));
            localStorage.setItem('nameLogin', JSON.stringify(res.data.hoTen));
            dispatch(createAction(USER_TYPE.FETCH_LIST_SUCCESS, res.data));
            if (res.data.maLoaiNguoiDung === "GV") {
                history.replace("/admin");
            } else {
                history.replace("/");
            }
            alertNotify("Thông Báo", "Đăng nhập thành công", "success");
        })
        .catch(err => {
            dispatch(createAction(USER_TYPE.FETCH_LIST_FAILURE, err.data));
            alertNotify("Thông Báo",err.response.data,"warning");
        })
};
export const SignUpAction = (value)  => {
    userService
        .signup(value)
        .then((res) => {
        })
        .catch(err => {
            alertNotify("Thông Báo", err.response.data, "warning")
        })
}
