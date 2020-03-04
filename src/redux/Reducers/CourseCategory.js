import COURSES_TYPE from "../Constants/Course";

const initialState = {
  courseCategory: [],
  error: null
};
const CourseCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES_TYPE.FETCH_CATEGORY_REQUEST: {
      return { ...state };
    }
    case COURSES_TYPE.FETCH_CATEGORY_SUCCESS: {
      return { ...state, courseCategory: action.data };
    }
    case COURSES_TYPE.FETCH_CATEGORY_FAILURE: {
      return { ...state, error: action.data };
    }
    default: {
      return state;
    }
  }
};
export default CourseCategoryReducer;
