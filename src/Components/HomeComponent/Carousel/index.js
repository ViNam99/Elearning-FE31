import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  const prefix = "slider";
  return (
    <section className={prefix}>
      <Carousel fade="true" className={`${prefix}__content`}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slide-1.jpg"
            alt="First slide"
          />
          <div className={`${prefix}__bgdark`}></div>
          <Carousel.Caption className={`${prefix}__caption`}>
            <div className={`${prefix}__paragraph text-left`}>
              <h4>Help Shape the Future of Education in Remakri</h4>
              <h2>Perfect Education Courses</h2>
              <p>
                New skills and knowledge can spark a lifetime of change. For 60
                years, Education Development Center (EDC), has designed and
                delivered programs in education, health
              </p>
              <button className={`${prefix}__btn1 mr-5`}>GET STARTED</button>
              <button className={`${prefix}__btn2`}>COURSE</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slide-2.jpg"
            alt="Second slide"
          />
          <div className={`${prefix}__bgdark`}></div>
          <Carousel.Caption>
            <div className={`${prefix}__paragraph`}>
              <h4>Help Shape the Future of Education in Remakri</h4>
              <h2>Perfect Education Courses</h2>
              <p>
                New skills and knowledge can spark a lifetime of change. For 60
                years, Education Development Center (EDC), has designed and
                delivered programs in education, health
              </p>
              <button className={`${prefix}__btn1 mr-5`}>GET STARTED</button>
              <button className={`${prefix}__btn2`}>COURSE</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
