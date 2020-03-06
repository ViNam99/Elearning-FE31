import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
const NavbarComponent = () => {
  const prefix = "nav";
  return (
    <Navbar expand="lg" className={prefix}>
      <Navbar.Brand >
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <NavLink exact to="/" className="nav-link">
              HOME
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/course" className="nav-link">
              COURSE
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about" className="nav-link">
              ABOUT US
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" className="nav-link">
              CONTACT
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
