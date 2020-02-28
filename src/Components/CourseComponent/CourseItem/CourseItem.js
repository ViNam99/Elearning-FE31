import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetchCourseList from "../../Common/useFetchCourseList";
import { classPrefixor } from "../../../Utils/classPrefixor";
const CourseItem = () => {
  const prefix = "courseItem";
  const c = classPrefixor(prefix);
  const { courseList } = useFetchCourseList();
  const renderCourseList = () => {
    return courseList.map((course, index) => {
      return (
        <div className="p-3" key={index}>
          <div className="card " key={index}>
            <img
              className="card-img-top"
              src={course.hinhAnh}
              alt={course.tenKhoaHoc}
              height={250}
              className="w-100"
            />
            <div className="card-body">
              <h4 className="card-title">{course.tenKhoaHoc}</h4>
              <button className={c`btn`}>JOIN NOW</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className={prefix}>
      <Slider {...settings}>{renderCourseList()}</Slider>
    </div>
  );
};

export default CourseItem;
