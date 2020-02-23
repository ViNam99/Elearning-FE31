import React from "react";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";
const SearchComponent = () => {
  const prefix = "search";
  return (
    <section className={prefix}>
      <Container>
        <div className={`${prefix}__content`}>
          <div className={`${prefix}__content__title`}>
            <h2>
              ONLINE <span>COURSES</span> SEARCH
            </h2>
            <p>Get more online courses, 4 reasons why you’ll love education </p>
          </div>
          <Form className={`${prefix}__content__form`}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Your Course Name" />
              <InputGroup.Append>
                <Button type="submit">SEARCH COURSE</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default SearchComponent;
