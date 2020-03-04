import { combineReducers } from "redux";
import CourseReducer from "./Course";
import CourseCategoryReducer from "./CourseCategory";
const RootReducer = combineReducers({
  CourseReducer,
  CourseCategoryReducer
});
export default RootReducer;
