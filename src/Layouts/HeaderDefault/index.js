import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  faUser,
  faLock,
  faCartArrowDown,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { classPrefixor } from "../../Utils/classPrefixor";
import { Link } from "react-router-dom";
const HeaderComponent = props => {
  const prefix = "header";
  const state = useSelector(state => state.user)
  const c = classPrefixor(prefix);
  const dispatch = useDispatch();
  const logout = () =>{
    dispatch({
      type: "DELETE"
    });
  }
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
              <Col lg="4">
                <p>Hello, {state.credentials.hoTen}</p>
              </Col>
              <Col lg="4">
                  <p>
                    <FontAwesomeIcon icon={faCartArrowDown} className="icon" />
                    (0)
                  </p>
                </Col>
                <Col lg="4">
                <Link to="/signIn" className="text-white">
                <button className="btn btn-danger" onClick={logout}>
                  LOG OUT
                  </button>
                  </Link>

                </Col>         
            </Row>
            ) : (
              <Row>
                <Col md="4">
                  <p>
                    <Link to="/signUp">
                      <FontAwesomeIcon icon={faUser} className="icon" />
                      <span>SIGN UP</span>
                    </Link>
                  </p>
                </Col>
                <Col md="4">
                  <p>
                    <Link to="/signIn">
                      <FontAwesomeIcon icon={faLock} className="icon" />
                      <span>SIGN IN</span>
                    </Link>
                  </p>
                </Col>
                <Col lg="3">
                  <p> 
                    <FontAwesomeIcon icon={faCartArrowDown} className="icon" />
                    (0)
                  </p>
                </Col>
                </Row>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default (HeaderComponent);
