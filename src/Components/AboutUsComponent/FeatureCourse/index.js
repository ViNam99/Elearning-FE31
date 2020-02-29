import React from "react";
import { Container, Row, Col } from "reactstrap";
import image from "../../../assets/img/7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faBookDead,
  faBomb
} from "@fortawesome/free-solid-svg-icons";
const prefix = "feature-course";
const FeatureCourse = () => {
  return (
    <div className={prefix}>
      <Container>
        <Row>
          <Col md="4" sm="6" xs="12">
            <div className="feature-block hover-effect-one">
              <div className="image">
                <img src={image} alt />
                <div className="title">
                  <h5>
                    <a href="course-details.html">Deep Learning</a>
                  </h5>
                  <div className="number">01</div>
                </div>
              </div>{" "}
              {/* /.image */}
              <div className="wrapper">
                <div className="icon">
                  <FontAwesomeIcon icon={faListAlt} />
                </div>
                <h5>
                  <a href="course-details.html">Deep Learning</a>
                </h5>
                <p>
                  This award is designed to give you a taster of teaching and
                  prepare you to teach and will introduce{" "}
                </p>
              </div>
            </div>{" "}
            {/* /.feature-block */}
          </Col>{" "}
          {/* /.col- */}
          <Col md="4" sm="6" xs="12">
            <div className="feature-block hover-effect-one">
              <div className="image">
                <img src={image} alt />
                <div className="title">
                  <h5>
                    <a href="course-details.html">Learning Courses</a>
                  </h5>
                  <div className="number">02</div>
                </div>
              </div>{" "}
              {/* /.image */}
              <div className="wrapper">
                <div className="icon">
                  <FontAwesomeIcon icon={faBookDead} />
                </div>
                <h5>
                  <a href="course-details.html">Learning Courses</a>
                </h5>
                <p>
                  The new federal education law provides great opportunities for
                  states to exercise{" "}
                </p>
              </div>
            </div>{" "}
            {/* /.feature-block */}
          </Col>{" "}
          {/* /.col- */}
          <Col md="4" sm="6" xs="12">
            <div className="feature-block hover-effect-one">
              <div className="image">
                <img src={image} alt />
                <div className="title">
                  <h5>
                    <a href="course-details.html">Study Coaching</a>
                  </h5>
                  <div className="number">03</div>
                </div>
              </div>{" "}
              {/* /.image */}
              <div className="wrapper">
                <div className="icon">
                  <FontAwesomeIcon icon={faBomb} />
                </div>
                <h5>
                  <a href="course-details.html">Study Coaching</a>
                </h5>
                <p>
                  Natural disasters such as wildfires and floods, along with
                  other types of emergency situations{" "}
                </p>
              </div>
            </div>{" "}
            {/* /.feature-block */}
          </Col>{" "}
          {/* /.col- */}
        </Row>{" "}
        {/* /.row */}
      </Container>{" "}
      {/* /.container */}
    </div>
  );
};

export default FeatureCourse;
