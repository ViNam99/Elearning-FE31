import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseReviseAction
} from "../../redux/Actions/Course";
import { createAction } from "../../redux/Actions";
import CHANGE_PAGE_TYPE from "../../redux/Constants/Page";
const useFetchCourseList = () => {
  const dispatch = useDispatch();
  const { totalCount, currentPage } = useSelector(
    state => state.CourseReducer
  );
  useEffect(() => {
    dispatch(fetchCourseReviseAction(currentPage, 8));
  }, [currentPage]);

  const handleChangePage = page => {
    dispatch(createAction(CHANGE_PAGE_TYPE.CHANGE_PAGE_SUCCESS, page));
  };
  return { totalCount, currentPage, handleChangePage };
};

export default useFetchCourseList;
