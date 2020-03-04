import React from "react";
import { Pagination } from "react-bootstrap";
const PaginationComponent = ({ ...props }) => {
  const { totalCount, handleChangePage, pageSize } = props;
  const totalPage = Math.ceil(totalCount / pageSize);
  //   Ví dụ totalPage = 5 => [0, 1, 2, 3, 4]
  const pages = [...Array(totalPage).keys()];
  const renderPage = () => {
    return pages.map((page, index) => {
      return (
        <Pagination.Item key={index} onClick={() => handleChangePage(page + 1)}>
          {page + 1}
        </Pagination.Item>
      );
    });
  };
  return (
    <Pagination>
      <Pagination.Prev />
      {renderPage()}
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationComponent;
