import React, { useEffect } from "react";
import HeaderComponent from "../HeaderDefault";
import NavbarComponent from "../NavBarDefault";
import FooterComponent from "../FooterDefault";
import SubcribeComponent from "../SubscribeDefault";
import axios from "../../Utils/axios";
import { createAction } from "../../redux/Actions";
import USER_TYPE from "../../redux/Constants/User";
import { connect } from "react-redux";

const UserLayout = props => {
  useEffect(() => {
    let credentials = localStorage.getItem('userLogin');
    if (credentials) {
      let credetialsObj = JSON.parse(credentials);
      console.log(credetialsObj);
      props.dispatch(createAction(USER_TYPE.FETCH_LIST_SUCCESS, credetialsObj));
      axios.defaults.headers[
        'Authorization'
      ] = `Bearer ${credetialsObj.accessToken}`;
    }
    let cartItem = localStorage.getItem('cartItem');
    let countCart = localStorage.getItem('countCart');
    console.log(countCart);
  }, []);
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

export default connect()(UserLayout);
