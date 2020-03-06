import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapSigns } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo2.png";
const prefix = "footer";
const FooterComponent = () => {
  return (
    <footer className={prefix}>
      <Container className={`${prefix}__content`}>
        <Row className="top-footer">
          <Col sm="3" xs="12" className="footer-list">
            <h6>Use link</h6>
            <Row>
              <Col md="6" xs="3" sm="12">
                <ListGroup flush>
                  <ListGroupItem>
                    <a href="">Themeforest</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href="">Graphicriver</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href="">Commodity</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href="">Mutual Funds</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href="">Advisors</a>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md="6" xs="3" sm="12">
                <ListGroup>
                  <ListGroupItem>
                    <a>About us</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a>Service</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a>Case Studies</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a>Event</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a>Contact us</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a>Faq</a>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Col>{" "}
          {/* /.footer-list */}
          <Col sm="6" xs="12" className="footer-logo-widget">
            <div className="wrapper">
              <div className="logo">
                <a href="index.html">
                  <img src={logo}  />
                </a>
              </div>
              <p>
                We provide expert Business Coaching to both individuals and
                businesses. With over 30 years of experience we’ll ensure that
                you’re always getting the best guidance from the top people in
                the entire industry.
              </p>
              <ListGroup>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faClock} /> Monday -Sturday at 09am-6pm
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faMapSigns} /> 52 Tailstoi Town 546 IT,
                  NYC{" "}
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>{" "}
          {/* /.footer-logo-widget */}
          <Col sm="3" xs="12" className="footer-news">
            <h6>Update News</h6>
            <ListGroup>
              <ListGroupItem>
                <a href="blog-details.html">
                  Are Performance Appraisals Pre The annual performance{" "}
                </a>
                <div className="date">February 23, 2017</div>
              </ListGroupItem>
              <ListGroupItem>
                <a href="blog-details.html">
                  Increase the value of your business by 71%
                </a>
                <div className="date">February 22, 2017</div>
              </ListGroupItem>
            </ListGroup>
          </Col>{" "}
          {/* /.footer-news */}
        </Row>{" "}
        {/* /.top-footer */}
      </Container>{" "}
      {/* /.container */}
      <div className="bottom-footer">
        <Container>
          <p>
            Copyright © 2018{" "}
            <a href="#" className="tran3s">
              Remakri
            </a>{" "}
            Template by{" "}
            <a href="#" className="tran3s" target="_blank">
              Template_mr
            </a>
          </p>
        </Container>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.bottom-footer */}
    </footer>
  );
};

export default FooterComponent;
