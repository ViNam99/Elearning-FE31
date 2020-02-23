import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "../../Components/HomeComponent/Carousel";
import FeatureComponent from "../../Components/HomeComponent/Feature";
const HomePage = () => {
  return (
    <Container fluid="true" className="p-0">
      <CarouselComponent />
      <FeatureComponent />
    </Container>
  );
};

export default HomePage;
