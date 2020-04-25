import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  faUser,
  faLock,
  faCartArrowDown,
  faPhone,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { classPrefixor } from "../../Utils/classPrefixor";
import { Link } from "react-router-dom";
import { DELETE } from "../../redux/Constants/User";
import { Button } from "reactstrap";
const HeaderComponent = (props) => {
  const prefix = "header";
  const state = useSelector((state) => state.user);
  const stateCart = useSelector((state) => state.cart);
  const c = classPrefixor(prefix);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("nameLogin");
    localStorage.removeItem("userLogin");
    dispatch({
      type: DELETE,
    });
  };
  return (
    <header className={prefix}>
      <Container className={`${prefix}__content`}>
        <Row>
          <Col lg="8">
            <Row>
              <Col lg="3">
                <p>Have any question?</p>
              </Col>
              <Col lg="2">
                <p>
                  <FontAwesomeIcon icon={faPhone} className="mr-1" />
                  +88 112345
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            {state.credentials ? (
              <Row>
                <Col lg="6">
                  <Button>Hi,{state.credentials.hoTen}</Button>
                </Col>
                <Col lg="3">
                  <Link to="/signIn" className="text-white">
                  <Button onClick={logout}> LOGOUT
                  </Button>
                  </Link>
                </Col>
                <Col lg="3">
                  <Link to="/cart">
                    <Button>
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        className="icon"
                      />
                      <sup>{stateCart.count}</sup>
                    </Button>
                  </Link>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col lg="4">
                  <p>
                    <Link to="/signUp">
                      <FontAwesomeIcon icon={faUser} className="icon" />
                      <span>SIGN UP</span>
                    </Link>
                  </p>
                </Col>
                <Col lg="4">
                  <p>
                    <Link to="/signIn">
                      <FontAwesomeIcon icon={faLock} className="icon" />
                      <span>SIGN IN</span>
                    </Link>
                  </p>
                </Col>
                <Col lg="4">
                  <Link to="/cart">
                    <p>
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        className="icon"
                      ></FontAwesomeIcon>
                      <sup>{stateCart.count}</sup>
                    </p>
                  </Link>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderComponent;
