import React from "react";
import HeaderComponent from "../HeaderDefault";
import NavbarComponent from "../NavBarDefault";
import FooterComponent from "../FooterDefault";
import SubcribeComponent from "../SubscribeDefault";

const UserLayout = props => {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      {props.children}
      <SubcribeComponent />
      <FooterComponent />
    </>
  );
};

export default UserLayout;
