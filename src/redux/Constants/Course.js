import createRequestTypes from "./request";

const COURSES_TYPE = {
  ...createRequestTypes("COURSES", "FETCH_LIST"),
  ...createRequestTypes("COURSES", "FETCH_CATEGORY"),
  ...createRequestTypes("COURSES", "FETCH_COURSE_CATEGORY"),
  ...createRequestTypes("COURSES", "REVISE"),
  ...createRequestTypes("COURSES", "SEARCH"),
};
export default COURSES_TYPE;
