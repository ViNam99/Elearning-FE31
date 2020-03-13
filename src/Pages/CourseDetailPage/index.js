import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFlag,
    faStar,
    faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { courseService } from "../../Services";
const CourseDetail = props => {
    const courseId = props.match.params.courseId;
    const [course, setCourse] = useState({});
    const prefix = "course-detail";
    useEffect(() => {
        courseService
            .courseDetail(courseId)
            .then(res => {
                console.log(res.data);
                setCourse(res.data);
            })
            .catch(err => {
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
                                    <li>$75</li>
                                </ul>
                            </div>
                            <div className="clearfix bottom-content">
                                <ul className="course-schedule float-left">
                                    <li>Ngày Tạo : {course.ngayTao}</li>
                                    <li>Lượt Xem: {course.luotXem}</li>
                                </ul>
                                <a href="#" class="float-right theme-line-button">
                                    Join Now
                </a>
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