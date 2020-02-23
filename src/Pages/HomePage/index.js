import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import CarouselComponent from '../../Components/HomeComponent/Carousel'
const HomePage = () => {
    return (
        <Container fluid="true">
            <Row>
                <Col lg="12">
                   <CarouselComponent/>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
