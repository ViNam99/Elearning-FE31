import COURSES_TYPE from "../Constants/Course";
import CHANGE_PAGE_TYPE from "../Constants/Page";

const initialState = {
  courseByCategory: [],
  courseList: [],
  totalCount: 0,
  currentPage: 1,
  loading: false,
  error: null
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES_TYPE.FETCH_LIST_SUCCESS: {
      return { ...state, courseList: action.data };
    }
    case COURSES_TYPE.FETCH_COURSE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        courseByCategory: action.data,
        totalCount: 1
      };
    }
    case COURSES_TYPE.REVISE_SUCCESS: {
      return {
        ...state,
        courseByCategory: action.data.items,
        totalCount: action.data.totalCount
      };
    }
    case CHANGE_PAGE_TYPE.CHANGE_PAGE_SUCCESS: {
      return { ...state, currentPage: action.data };
    }
    default: {
      return state;
    }
  }
};
export default CourseReducer;
