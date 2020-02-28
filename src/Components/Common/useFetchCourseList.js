import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseListAction } from "../../redux/Actions/Course";
const useFetchCourseList = () => {
  const dispatch = useDispatch();
  const { courseList, totalCount, currentPage } = useSelector(
    state => state.CourseReducer
  );
    useEffect(() => {
        dispatch(fetchCourseListAction(currentPage , 6));
    },[currentPage])
  return {courseList , totalCount , currentPage };
};

export default useFetchCourseList;
