import React from "react";
import { classPrefixor } from "../../../Utils/classPrefixor";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const prefix = "review";
  const c = classPrefixor(prefix);
  return (
    <section className={prefix}>
      <Container>
        <div className={c`content`}>
          <div className={c`content__paragraph`}>
            <h2 className={c`content__paragraph__title`}>OUR CLIENT REVIEWS</h2>
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className={c`content__paragraph__icon`}
            />
            <p>
              Over 20 years of experience we’ll ensure you get the best guidance
              Best service with the best quality works.
            </p>
          </div>
          <div className={c`content__review`}>
            <Slider {...settings}>
              <div className={c`content__review__item`}>
                <p>
                  Definitely the best course on React (and lots of related
                  technologies)
                </p>
                <img src="images/3.jpg" alt="img" />
                <p>FullStack Developer</p>
              </div>
              <div className={c`content__review__item`}>
                <p>
                  Wow! This is one long course and not for the faint hearted. It
                  is very well presented
                </p>
                <img src="images/4.jpg" alt="img" />
                <p>Back-End Developer</p>
              </div>
              <div className={c`content__review__item`}>
                <p>
                  Mosh, you have done a really good job with this course! It was
                  a real pleasure following it.
                </p>
                <img src="images/5.jpg" alt="img" />
                <p>Front-End Developer</p>
              </div>
              <div className={c`content__review__item`}>
                <p>
                  The Angular framework is difficult? After following this
                  course you'll think differently.
                </p>
                <img src="images/f2.jpg" alt="img" />
                <p> Senior Frontend Engineer</p>
              </div>
              <div className={c`content__review__item`}>
                <p>
                  You have done a really good job with this course! It was a
                  real pleasure following it.
                </p>
                <img src="images/f1.jpg" alt="img" />
                <p>Front-End Developer</p>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
      <div className={c`bgdark`}></div>
    </section>
  );
};

export default ReviewComponent;
