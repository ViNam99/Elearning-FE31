import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAction } from "../../redux/Actions";
import { CHANGE_PAGE_TYPE } from "../../redux/Constants";
import Pagination from "@material-ui/lab/Pagination";
const PaginationComponent = ({ ...props }) => {
  const dispatch = useDispatch();
  const { totalCount, pageSize, currentPage } = props;
  const totalPage = Math.ceil(totalCount / pageSize);
  const [page, setPage] = useState(currentPage);
  const prefix = "pagination";
  const handleChange = (event, value) => {
    dispatch(createAction(CHANGE_PAGE_TYPE.CHANGE_PAGE_SUCCESS, value));
    setPage(value);
  };
  return (
    <Pagination
      className={prefix}
      count={totalPage}
      color="primary"
      onChange={handleChange}
      page={page}
      defaultPage={1}
    />
  );
};

export default PaginationComponent;
