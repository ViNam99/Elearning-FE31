import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
const NavbarComponent = () => {
  const prefix = "nav";
  return (
    <Navbar expand="lg" className={prefix}>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="#home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">COURSE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">BLOG</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
