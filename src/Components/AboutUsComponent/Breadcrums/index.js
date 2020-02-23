import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrums= () => {
    return (
        <div className=".theme-inner-banner">
            <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <h1>About Us</h1>
        </div>
    );
};

export default Breadcrums;