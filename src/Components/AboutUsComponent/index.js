import React from "react";
import Breadcrumb from "./Breadcrums";
import FeatureCourse from "./FeatureCourse";
import CountUpStudent from "./CountUpStudent";
import LinktoContact from "./LinktoContact";
import ClientSlider from "./ClientSlider";

const MainAbout = () => {
  return (
    <div>
      <Breadcrumb />
      <FeatureCourse />
      <CountUpStudent />
      <LinktoContact />
      {/* <ClientSlider/> */}
    </div>
  );
};

export default MainAbout;
