import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Background from "../../../assets/img/inner-banner.jpg";
import { NavLink } from "react-router-dom";
const prefix = "breadcr";
const sectionStyle = {
  textAlign: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};
const CourseBaner = () => {
  return (
    <div className={prefix} style={sectionStyle}>
      <div className={`${prefix}__opacity`}>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink exact to="/">
              Home
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>Course</BreadcrumbItem>
        </Breadcrumb>
        <h1>Course</h1>
      </div>
    </div>
  );
};

export default CourseBaner;
