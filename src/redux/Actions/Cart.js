import CartService from "../../Services/CartService"
import { alertNotify } from "../../Utils/alert"

export const checkoutCourse = (value) =>{
    CartService
    .checkoutCourse(value)
    .then((res)=>{
        alertNotify("Notification", res.data, "success")
    })
    .catch((err)=>{
        alertNotify("Notification", err.response.data, "warning")
    })
}