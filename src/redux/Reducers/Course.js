import COURSES_TYPE from "../Constants/Course";

const initialState = {
  courseList: [],
  totalCount: 0,
  currentPage: 1,
  error: null,
  loading: false
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES_TYPE.FETCH_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case COURSES_TYPE.FETCH_LIST_SUCCESS: {
      return {
        ...state,
        courseList: action.data.items,
        totalCount: action.data.totalCount,
        loading: false
        
      };
    }
    case COURSES_TYPE.FETCH_LIST_FAILURE: {
      return { ...state, loading: false, error: action.data };
    }
    default: {
      return state;
    }
  }
};
export default CourseReducer;
