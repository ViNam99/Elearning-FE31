import COURSES_TYPE from "../Constants/Course";
import { courseService } from "../../Services";
import { createAction } from ".";
export const fetchCourseListAction = () => dispatch => {
  dispatch({
    type: COURSES_TYPE.FETCH_LIST_REQUEST
  });
  courseService
    .fetchCourseList()
    .then(res => {
      dispatch(createAction(COURSES_TYPE.FETCH_LIST_SUCCESS, res.data));
    })
    .catch(err => {
      dispatch(createAction(COURSES_TYPE.FETCH_LIST_FAILURE, err.data));
    });
};
export const fetchCourseCategoryAction = () => dispatch => {
  dispatch({
    type: COURSES_TYPE.FETCH_CATEGORY_REQUEST
  });
  courseService
    .fetchCourseCategory()
    .then(res => {
      dispatch(createAction(COURSES_TYPE.FETCH_CATEGORY_SUCCESS, res.data));
    })
    .catch(err => {
      dispatch(createAction(COURSES_TYPE.FETCH_CATEGORY_FAILURE, err.data));
    });
};
export const fetchCourseByCategoryAction = maDanhMuc => dispatch => {
  dispatch({
    type: COURSES_TYPE.FETCH_COURSE_CATEGORY_REQUEST
  });
  courseService
    .fetchCourseByCategory(maDanhMuc)
    .then(res => {
      dispatch(
        createAction(COURSES_TYPE.FETCH_COURSE_CATEGORY_SUCCESS, res.data)
      );
    })
    .catch(err => {
      dispatch(
        createAction(COURSES_TYPE.FETCH_COURSE_CATEGORY_FAILURE, err.data)
      );
    });
};
export const fetchCourseReviseAction = (currentPage, pageSize) => dispatch => {
  dispatch({
    type: COURSES_TYPE.REVISE_REQUEST
  });
  courseService
    .fetchCourseRevise(currentPage, pageSize)
    .then(res => {
      dispatch(createAction(COURSES_TYPE.REVISE_SUCCESS, res.data));
    })
    .catch(err => {
      dispatch(createAction(COURSES_TYPE.REVISE_FAILURE, err.data));
    });
};
