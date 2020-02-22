import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
const prefix = "footer";
const Footer = () => {
    return (
        <footer className={prefix}>
<div>
  <Container>
    <Row className="top-footer">
      <Col sm="3" xs="12"className="footer-list">
        <h6>Use link</h6>
        <Row>
          <Col md="6" xs="3" sm="12">
            <ListGroup>
              <ListGroupItem><Link to="" >Themeforest</Link></ListGroupItem>
              <ListGroupItem><Link to="" >Graphicriver</Link></ListGroupItem>
              <ListGroupItem><Link to="" >Commodity</Link></ListGroupItem>
              <ListGroupItem><Link to="" >Mutual Funds</Link></ListGroupItem>
              <ListGroupItem><Link to="" >Advisors</Link></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="6" xs="3" sm="12">           
           <ListGroup>
              <ListGroupItem><Link to="">About us</Link></ListGroupItem>
              <ListGroupItem><Link to="">Service</Link></ListGroupItem>
              <ListGroupItem><Link to="">Case Studies</Link></ListGroupItem>
              <ListGroupItem><Link to="">Event</Link></ListGroupItem>
              <ListGroupItem><Link to="">Contact us</Link></ListGroupItem>
              <ListGroupItem><Link to="">Faq</Link></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Col> {/* /.footer-list */}
      <div className="col-sm-6 col-xs-12 footer-logo-widget">
        <div className="wrapper">
          <div className="logo"><a href="index.html"><img src="images/logo/logo2.png" alt /></a></div>
          <p>We provide expert Business Coaching to both individuals and businesses. With over 30 years of experience we’ll ensure that you’re always getting the best guidance from the top people in the entire industry.</p>
          <ul>
            <li><i className="flaticon-stopwatch" /> Monday -Sturday at 09am-6pm</li>
            <li><i className="flaticon-map-line" /> 52 Tailstoi Town 546 IT, NYC </li>
          </ul>
        </div>
      </div> {/* /.footer-logo-widget */}
      <div className="col-sm-3 col-xs-12 footer-news">
        <h6>Update News</h6>
        <ul>
          <li>
            <a href="blog-details.html">Are Performance Appraisals Pre The annual performance </a>
            <div className="date">February 23, 2017</div>
          </li>
          <li>
            <a href="blog-details.html">Increase the value of your business by 71%</a>
            <div className="date">February 22, 2017</div>
          </li>
        </ul>
      </div> {/* /.footer-news */}
    </Row> {/* /.top-footer */}
  </Container> {/* /.container */}
  <div className="bottom-footer">
    <div className="container">
      <p>Copyright © 2018 <a href="#" className="tran3s">Remakri</a> Template by <a href="#" className="tran3s" target="_blank">Template_mr</a></p>
    </div> {/* /.container */}
  </div> {/* /.bottom-footer */}
</div>q
    </footer>
    );
};

export default Footer;