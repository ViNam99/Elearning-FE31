import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { courseService } from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/Constants/Cart";
const CourseDetail = (props) => {
  const courseId = props.match.params.courseId;
  const state = useSelector((state) => state.cart);
  let count = state.count;
  let cartAdd = [];
  let cart = state.cart;
  const dispatch = useDispatch();
  const [course, setCourse] = useState({});
  const addToCart = () => { 
      cartAdd.push(course);
      console.log(cartAdd[0]);
        dispatch({
            type:ADD_TO_CART,
            count: (count += 1),
            cart : cart.push(cartAdd[0])
        })
  };
  const prefix = "course-detail";
  useEffect(() => {
    courseService
      .courseDetail(courseId)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);
  return (
    <div className={prefix}>
      <Container>
        <Row>
          <Col lg="9" md="8" xs="12" className={`${prefix}__content`}>
            <img src={course.hinhAnh} />
            <div className="course-info">
              <div className="clearfix">
                <h2 className="float-left">{course.tenKhoaHoc}</h2>
                <ul className="course-value float-right">
                  <li>
                    <FontAwesomeIcon icon={faFlag} />
                  </li>
                  <li>${course.luotXem}</li>
                </ul>
              </div>
              <div className="clearfix bottom-content">
                <ul className="course-schedule float-left">
                  <li>Ngày Tạo : {course.ngayTao}</li>
                </ul>
                <button
                  className="float-right theme-line-button"
                  onClick={addToCart}
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" /> Add To Cart
                </button>
              </div>
            </div>
            <div className="course-des">
              <h5>COURSE DESCRIPTION</h5>
              <p>{course.moTa}</p>
            </div>
            <div className="course-panel"></div>
          </Col>
          <Col lg="3" md="4" xs="6" className={`${prefix}__sidebar`}>
            <div className="sidebar-widget sidebar-list">
              <h5>All Courses List</h5>
              <ul>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Software and IT</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Economy</a>
                </li>
                <li>
                  <a href="#">Programming Language</a>
                </li>
                <li>
                  <a href="#">Mathematics</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(CourseDetail);
