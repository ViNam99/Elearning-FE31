import axios from "../Utils/axios";
class CartService {
    checkoutCourse = (value) =>{
        return axios({
            method:"POST",
            url:`QuanLyKhoaHoc/GhiDanhKhoaHoc`,
            data:value,
            headers: {'Authorization': `Bearer ${sessionStorage.getItem("Token")}`}
        })
    }
}
export default CartService;