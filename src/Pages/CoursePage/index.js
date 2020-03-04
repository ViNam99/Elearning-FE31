import React from "react";
import { Container } from "react-bootstrap";
import CourseBaner from "../../Components/CourseComponent/CourseBaner";
import CourseCategory from "../../Components/CourseComponent/CourseCategory";
const CoursePage = () => {
  return (
    <Container fluid="true" className="p-0">
      <CourseBaner />
      <CourseCategory />
    </Container>
  );
};

export default CoursePage;
