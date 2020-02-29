import React from "react";
import GoogleMap from '../../Components/ContactComponent/GoogleMap';
import Breadcrumbs from '../../Components/AboutUsComponent/Breadcrums';
import ContactForm from '../../Components/ContactComponent/ContactForm'
import { Container } from "reactstrap";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "80px" }}>
      <Container>
        <Breadcrumbs />
        <GoogleMap />
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactPage;
