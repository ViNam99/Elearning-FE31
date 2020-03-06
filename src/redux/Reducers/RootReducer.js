import {combineReducers} from 'redux';
import CourseReducer from './Course';
import UserReducer from './User';
const RootReducer = combineReducers({
    CourseReducer,
    user: UserReducer
})
export default RootReducer;