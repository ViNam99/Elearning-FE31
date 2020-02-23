import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CarouselComponent from "../../Components/HomeComponent/Carousel";
const HomePage = () => {
  return (
    <Container fluid="true">
      <Row>
        <CarouselComponent />
      </Row>
    </Container>
  );
};

export default HomePage;
