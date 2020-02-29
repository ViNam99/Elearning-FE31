import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "../../Components/HomeComponent/Carousel";
import FeatureComponent from "../../Components/HomeComponent/Feature";
import SearchComponent from "../../Layouts/SearchDefault";
import CourseComponent from "../../Components/CourseComponent";
import ReviewComponent from "../../Components/HomeComponent/Review";
import SubcribeComponent from "../../Components/HomeComponent/Subscribe";
const HomePage = () => {
  return (
    <Container fluid="true" className="p-0">
      <CarouselComponent />
      <FeatureComponent />
      <SearchComponent />
      <CourseComponent />
      <ReviewComponent />
      <SubcribeComponent />
    </Container>
  );
};

export default HomePage;
