import React from 'react';
import Breadcrumb from './Breadcrums';
import FeatureCourse from './FeatureCourse';
import CountUpStudent from './CountUpStudent';
import LinktoContact from './LinktoContact';
import CountRequest from './CourseRequest';

const MainAbout = () => {
    return (
        <div>
            <Breadcrumb/>
            <FeatureCourse/>
            <CountUpStudent/>
            <LinktoContact/>
            <CountRequest/>
        </div>
    );
};

export default MainAbout;