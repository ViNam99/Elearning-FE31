import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createAction } from "../../../redux/Actions";
import { COURSES_TYPE } from "../../../redux/Constants";
import {
  fetchCourseListAction,
  fetchCourseReviseAction
} from "../../../redux/Actions/Course";
class SearchCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  handleChange = evt => {
    const { courseListBySearch, courseByCategory} = this.props;
    const { name, value } = evt.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        let filterCourse = courseByCategory.filter(item => {
          return (
            item.tenKhoaHoc
              .toUpperCase()
              .indexOf(this.state.search.toUpperCase()) !== -1
          );
        });
        courseListBySearch(filterCourse);
      }
    );
  };
  render() {
    const { search } = this.state;
    return (
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="search course"
            value={search}
            name="search"
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  courseList: state.CourseReducer.courseList,
  courseByCategory: state.CourseReducer.courseByCategory
});
const mapDispatchToProps = dispatch => ({
  courseListBySearch: courseSearch =>
    dispatch(createAction(COURSES_TYPE.SEARCH_SUCCESS, courseSearch)),
  fetchCourseList: () => dispatch(fetchCourseListAction()),
  fetchCourseSlice: (currentPage, pageSize) =>
    dispatch(fetchCourseReviseAction(currentPage, pageSize))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchCourse);
