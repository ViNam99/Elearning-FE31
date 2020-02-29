import React from "react";
import Breadcrumb from "../../Components/AboutUsComponent/Breadcrums";
import FeatureCourse from "../../Components/AboutUsComponent/FeatureCourse";
import CountUpStudent from "../../Components/AboutUsComponent/CountUpStudent";
import LinktoContact from "../../Components/AboutUsComponent/LinktoContact";
import ClientSlider from "../../Components/AboutUsComponent/ClientSlider";
const AboutPage = () => {
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

export default AboutPage;
