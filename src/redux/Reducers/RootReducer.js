import {combineReducers} from 'redux';
import CourseReducer from './Course';
import UserReducer from './User';
import CartReducer from './Cart';
const RootReducer = combineReducers({
    CourseReducer,
    cart:CartReducer,
    user:UserReducer
})
export default RootReducer;