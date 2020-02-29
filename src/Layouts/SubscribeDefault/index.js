import React from "react";
import { classPrefixor } from "../../Utils/classPrefixor";
import {
  Col,
  Row,
  Container,
  InputGroup,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
const SubcribeComponent = () => {
  const prefix = "subscribe";
  const c = classPrefixor(prefix);
  return (
    <section className={prefix}>
      <Container>
        <Row>
          <Col lg="6">
            <p className={c`title`}>Sign up for Subscribe News Course</p>
          </Col>
          <Col lg="6">
            <Form className={c`form`}>
              <InputGroup className="mb-3">
                <FormControl placeholder="Your Email" />
                <Button type="submit">SUBMIT !</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubcribeComponent;
