import React from "react";
import Background from "../../../assets/img/inner-banner.jpg";
const prefix = "banner";
const sectionStyle = {
  textAlign: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};
const LinktoContact = () => {
  return (
    <div className={prefix} style={sectionStyle}>
      <div className={`${prefix}__opacity`}>
        <h6>
          Over 20 years of experience we’ll ensure you get the best guidance{" "}
          <p>Best service with the best quality works.</p>
        </h6>
        <button className="btn btn-primary contactus">
          <a href="">Contact Us</a>
        </button>
        <button className="btn getfreecourse">
          <a href="">Get Free Course</a>
        </button>
      </div>
    </div>
  );
};

export default LinktoContact;
