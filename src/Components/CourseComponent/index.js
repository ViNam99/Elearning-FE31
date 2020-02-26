import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
const CourseComponent = () => {
  const prefix = "course";
  return (
    <section className={prefix}>
      <Container>
        <div className={`${prefix}__content text-center`}>
          <h2>OUR EDUCATION COURSES</h2>
          <FontAwesomeIcon
            icon={faBookOpen}
            className={`${prefix}__content__icon`}
          />
          <p>
            From concept through construction, to the finishing touches of each
            of your projects, you can rely on the our team to deliver a personal
            environment tailored specifically for you.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CourseComponent;
