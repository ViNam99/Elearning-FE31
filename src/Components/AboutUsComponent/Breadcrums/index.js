import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Background from '../../../assets/img/inner-banner.jpg';
const prefix="breadcr"
const sectionStyle = {
    textAlign: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${Background})`
    
};
const Breadcrumbs= () => {
    return (
        <div className={prefix} style={sectionStyle}>
            <div className={`${prefix}__opacity`}>
            <Breadcrumb>
            <BreadcrumbItem ><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <h1>About Us</h1>
            </div>
        </div>
    );
};

export default Breadcrumbs;