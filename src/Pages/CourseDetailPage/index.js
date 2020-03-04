import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const CourseDetail = () => {
    const prefix = "course-detail";
    return (
        <div className={prefix}>
            <Container>
                <Row>
                    <Col lg="9" md="8" xs="12" className={`${prefix}__content`}>
                        <img src="images/2.jpg" />
                        <div className="course-info">
                            <div className="clearfix">
                                <h2 className="float-left">
                                    Education CT coaching
                                </h2>
                                <ul className="course-value float-right">
                                    <li><FontAwesomeIcon icon={faFlag} /></li>
                                    <li>
                                        $75
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix bottom-content">
                                <ul className="course-schedule float-left">
                                    <li>Start Date : 21 Jan, 2017</li>
                                    <li>Time: 11:30 am - 5:30 pm</li>
                                    <li>Course Duration : 123 Hours</li>
                                    <li>
                                        <ul className="clearfix">
                                            <p className="first">Review:</p>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStarHalfAlt} /></li>
                                        </ul>
                                    </li>
                                </ul>
                                <a href="#" class="float-right theme-line-button">Join Now</a>
                            </div>
                        </div>
                        <div className="course-des">
                            <h5>COURSE DESCRIPTION</h5>
                            <p>Our deep understanding of project and program management has enabled the success of our clients’ large initiatives. Capco can provide expertise at every level. We understand the financial services industry’s core challenge of change for good, not just change for change’s sake. We innovate and transform change management to deliver more efficient, effective and higher quality results. Capco can provide expertise at every level.</p>
                            <p>Behaving with Respect means we listen and communicate directly and openly. We value diversity among people, their ideas and their points of view. We are natural partners with our clients, colleagues and our community. And we are at our best as individuals when working as a team.</p>
                        </div>
                        <div className="course-panel">

                        </div>
                    </Col>
                    <Col lg="3" md="4" xs="6" className={`${prefix}__sidebar`}>
                        <div className="sidebar-widget sidebar-list">
                            <h5>All Courses List</h5>
                            <ul>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Software and IT</a></li>
                                <li><a href="#">English</a></li>
                                <li><a href="#">Economy</a></li>
                                <li><a href="#">Programming Language</a></li>
                                <li><a href="#">Mathematics</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetail;