import React from 'react';
import GoogleMap from './GoogleMap';
import Breadcrumbs from '../AboutUsComponent/Breadcrums';
import ContactForm from './ContactForm';
import { Container } from 'reactstrap';

const Contact = () => {
    return (
        <div style={{backgroundColor:"#f4f4f4", padding:"80px"}}>
        <Container>
            <Breadcrumbs/>
            <GoogleMap/>
            <ContactForm/>
        </Container>
        </div>
    );
};

export default Contact;