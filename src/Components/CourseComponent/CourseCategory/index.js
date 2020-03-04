import React, { useEffect } from "react";
import { Col, Row, Nav } from "react-bootstrap";
import { classPrefixor } from "../../../Utils/classPrefixor";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseCategoryAction,
  fetchCourseByCategoryAction,
  fetchCourseReviseAction
} from "../../../redux/Actions/Course";
import CourseItem from "./CourseItem";
import useFetchCourseList from "../../Common/useFetchCourseList";
import Pagination from "../../../Layouts/Pagination";
const CourseCategory = () => {
  const prefix = "courseCategory";
  const c = classPrefixor(prefix);
  const dispatch = useDispatch();
  const { courseCategory } = useSelector(state => state.CourseCategoryReducer);
  const { courseByCategory } = useSelector(state => state.CourseReducer);
  const { totalCount, handleChangePage} = useFetchCourseList();
  useEffect(() => {
    dispatch(fetchCourseCategoryAction());
  }, []);
  const renderCourseCategory = () => {
    return courseCategory.map((item, index) => {
      return (
        <Nav.Link
          key={index}
          onClick={() => dispatch(fetchCourseByCategoryAction(item.maDanhMuc))}
        >
          {item.tenDanhMuc}
        </Nav.Link>
      );
    });
  };

  const renderCourseList = () => {
    if (courseByCategory.length > 0) {
      return courseByCategory.map((course, index) => {
        return <CourseItem key={index} course={course} />;
      });
    }
  };
  return (
    <section className={prefix}>
      <Row>
        <Col lg="2">
          <div className={c`category`}>
            <h2 className="text-center m-0"> Course Category</h2>
            <div className={c`category__nav`}>
              <Nav className="flex-column">
                <Nav.Link
                  onClick={() => dispatch(fetchCourseReviseAction(1, 8))}
                >
                  Tất cả
                </Nav.Link>
                {renderCourseCategory()}
              </Nav>
            </div>
          </div>
        </Col>
        <Col lg="10">
          <Row>{renderCourseList()}</Row>
        </Col>
      </Row>
      <Row>
        <Pagination
          totalCount={totalCount}
          pageSize={8}
          handleChangePage={handleChangePage}
        />
      </Row>
    </section>
  );
};

export default CourseCategory;
