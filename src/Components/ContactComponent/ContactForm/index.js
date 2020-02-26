import React from 'react';
import {Row, Col, ListGroup, ListGroupItem, FormGroup, Label, Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapSigns, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
const prefix="contact-form"
const ContactForm = () => {
    return (
        <div className={prefix}>
            <Row>
                <Col md="6" xs="12">
                    <div className={`${prefix}__theme-form`}>
                        <h3>Request for Contact</h3>
                        <Form>
                            <FormGroup>
                                <Label>Your Full Name</Label>
                                <Input type="text" placeholder="Type Name"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Your Email Address</Label>
                                <Input type="email" placeholder="Type Email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Your Full Name</Label>
                                <Input type="textarea" placeholder="Type message"></Input>
                            </FormGroup>
                            <Button className="btn btn-success">Get Request</Button>
                        </Form>
                    </div>
                </Col>
                <Col md="6" xs="12">
                    <div className={`${prefix}__contact-address`}>
                        <ListGroup className="address">
                            <ListGroupItem>
                            <FontAwesomeIcon icon={faMapSigns}/>
                            Brooklyn, NY 10036, United States
                            </ListGroupItem>
                            <ListGroupItem>
                            <FontAwesomeIcon icon={faMailBulk}/>
                            info_snappy@gmail.com
                            </ListGroupItem>
                            <ListGroupItem>
                            <FontAwesomeIcon icon={faPhone}/>
                            +88 01912704287
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ContactForm;