import COURSES_TYPE from "../Constants/Course";
import { courseService } from "../../Services";
import {createAction} from ".";
export const fetchCourseListAction = (currentPage, pageSize) => dispatch => {
  dispatch({
    type: COURSES_TYPE.FETCH_LIST_REQUEST
  });
  courseService
    .fetchCourseList(currentPage, pageSize)
    .then(res => {
      dispatch(createAction(COURSES_TYPE.FETCH_LIST_SUCCESS, res.data));
    })
    .catch(err => {
      dispatch(createAction(COURSES_TYPE.FETCH_LIST_FAILURE, err.data));
    });
};

