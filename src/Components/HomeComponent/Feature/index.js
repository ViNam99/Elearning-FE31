import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faBookOpen,
    faBookReader
} from "@fortawesome/free-solid-svg-icons";
const FeatureComponent = () => {
  const prefix = "feature";
  return (
    <>
      <Container>
        <section className={prefix}>
          <Row>
            <Col lg="6">
              <img
                src="./images/shape1.png"
                alt="imgShape"
                className="w-100 text-center"
              />
            </Col>
            <Col lg="6">
              <div className={`${prefix}__paragraph`}>
                <h2>We will give you future</h2>
                <div>
                  It highlights some of the lessons learned and the successes of
                  the England national pupil data story; by sharing England’s
                  story we hope that policymakers in other countries where a
                  national pupil-level data
                </div>
                <p>
                  Learn about Superintendent Torlakson's initiatives to improve
                  schools, including encouraging schools to become "Safe
                  Havens," promoting teaching, and leading the charge to improve
                  career technical education and Science Technology Engineering
                  and Math (STEM) education.
                </p>
                <button className={`${prefix}__btn`}>Know more future</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <div className={`${prefix}__block`}>
                <div className={`${prefix}__block__wraper`}>
                  <div className={`${prefix}__block__wraper__icon`}>
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                  </div>
                  <h5>Deep Learning</h5>
                  <p>
                    This award is designed to give you a taster of teaching and
                    prepare you to teach and will introduce
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className={`${prefix}__block`}>
                <div className={`${prefix}__block__wraper`}>
                  <div className={`${prefix}__block__wraper__icon`}>
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                  <h5>Learning Courses</h5>
                  <p>
                  The new federal education law provides great opportunities for states to exercise
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className={`${prefix}__block`}>
                <div className={`${prefix}__block__wraper`}>
                  <div className={`${prefix}__block__wraper__icon`}>
                    <FontAwesomeIcon icon={faBookReader} />
                  </div>
                  <h5>Study Coaching</h5>
                  <p>
                  Natural disasters such as wildfires and floods, along with other types of emergency situations
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default FeatureComponent;
