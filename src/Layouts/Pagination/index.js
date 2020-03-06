import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAction } from "../../redux/Actions";
import { CHANGE_PAGE_TYPE } from "../../redux/Constants";
const PaginationComponent = ({ ...props }) => {
  const dispatch = useDispatch();
  const { totalCount, handleChangePage, pageSize } = props;
  const totalPage = Math.ceil(totalCount / pageSize);
  //   Ví dụ totalPage = 5 => [0, 1, 2, 3, 4]
  const pages = [...Array(totalPage).keys()];
  const renderPage = () => {
    return pages.map((page, index) => {
      return (
        <Pagination.Item
          key={index}
          onClick={() => handleChangePage(page + 1)}
        >
          {page + 1}
        </Pagination.Item>
      );
    });
  };

  const prevNextPage = value => {
    dispatch(createAction(CHANGE_PAGE_TYPE.PREV_NEXT_SUCCESS, value));
  };
  return (
    <Pagination>
      <Pagination.Prev onClick={() => prevNextPage(false)} />
      {renderPage()}
      <Pagination.Next onClick={() => prevNextPage(true)} />
    </Pagination>
  );
};

export default PaginationComponent;
