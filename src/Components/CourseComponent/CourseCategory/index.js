import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
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
import SearchCourse from "../SearchCourse";
import useStyles from "../../Common/useStyle.";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const CourseCategory = () => {
  const prefix = "courseCategory";
  const c = classPrefixor(prefix);
  const dispatch = useDispatch();
  const { courseCategory } = useSelector(state => state.CourseCategoryReducer);
  const { courseByCategory } = useSelector(state => state.CourseReducer);
  const { totalCount, currentPage } = useFetchCourseList();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(fetchCourseCategoryAction());
  }, []);

  const renderCourseCategory = () => {
    return courseCategory.map((item, index) => {
      return (
        <Tab
          key={index}
          onClick={() => dispatch(fetchCourseByCategoryAction(item.maDanhMuc))}
          label={item.tenDanhMuc}
        ></Tab>
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

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={prefix}>
      <Row>
        <Col lg="9"></Col>
        <Col lg="3">
          <SearchCourse />
        </Col>
      </Row>
      <Row>
        <Col lg="2">
          <div className={c`category`}>
            <h2 className="text-center m-0"> Course Category</h2>
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                value={value}
                className={classes.tabs}
                onChange={handleChangeTab}
                variant="scrollable"
              >
                <Tab
                  onClick={() => dispatch(fetchCourseReviseAction(1, 8))}
                  label="Tất cả"
                />
                {renderCourseCategory()}
              </Tabs>
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
          currentPage={currentPage}
        />
      </Row>
    </section>
  );
};

export default CourseCategory;
