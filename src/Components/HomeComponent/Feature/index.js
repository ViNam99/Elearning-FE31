import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
        </section>
      </Container>
    </>
  );
};

export default FeatureComponent;
