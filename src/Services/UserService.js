import * as yup from "yup";
import axios from "../Utils/axios";

export const SignUpUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
    matKhau: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
      .max(16, "Mật khẩu phải có từ 8 tới 16 kí tự"),
    hoTen: yup
      .string()
      .required()
      .matches(/^[a-zA-Z ]*$/, "Họ tên phải là chữ"),
    email: yup
      .string()
      .required()
      .email("Email không đúng định dạng"),
    soDT: yup
      .string()
      .required()
      .matches(/^[0-9]*$/, "Vui lòng nhập số")
  });
  export const SignInUserSchema = yup.object().shape({
    taiKhoan: yup.string()
    .min(6, "Tài khoản từ 6 ký tự")
    .max(30, "Tài khoản không vượt quá 30 ký tự")
    .required("Vui lòng nhập tài khoản"),
    matKhau: yup.string()
    .min(6, "Mật khẩu từ 6 ký tự")
    .required("Vui lòng nhập mật khẩu")
      })
class UserService {
    login = (value)=>{
        return axios({
            method:"POST",
            url:`QuanLyNguoiDung/DangNhap`,
            data: value
        })
    }
    signup = (value) =>{
      console.log(value);
      return axios({
        method:"POST",
        url:`QuanLyNguoiDung/DangKy`,
        data:value
      })
    }
}
export default UserService;
