import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseReviseAction } from "../../redux/Actions/Course";
const useFetchCourseList = () => {
  const dispatch = useDispatch();
  const { totalCount, currentPage } = useSelector(state => state.CourseReducer);
  useEffect(() => {
    dispatch(fetchCourseReviseAction(currentPage, 8));
  }, [currentPage]);
  return { totalCount, currentPage };
};

export default useFetchCourseList;
