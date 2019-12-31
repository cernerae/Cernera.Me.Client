import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './ContactPage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheck, faEnvelope)

const ContactPage: React.FC = () => {

    return (
        <div id="ContactPage" className={style["contact-page"]}>
            <div className={style["contact-page__content"]}>
                <Container fluid>
                    <Row  className="show-grid">

                        {/* This is the Sidebar column */}
                        <Col style={{maxWidth: '260px'}}><Sidebar/></Col>

                        <Col>
                            <h1 className={style["contact-page__content__title"]}>Contact Me</h1>

                            <Form className={style["contact-page__content__form"]}>

                                <Form.Group  controlId="exampleForm.ControlInput1">
                                    <Form.Label >Your Name</Form.Label>
                                    <Form.Control className={style["contact-page__content__form__text-area"]} type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group  controlId="exampleForm.ControlInput1">
                                    <Form.Label >Your Email Address</Form.Label>
                                    <Form.Control className={style["contact-page__content__form__text-area"]} type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Message Topic</Form.Label>
                                        <Form.Control className={style["contact-page__content__form__text-area"]} as="select">
                                            <option>Job Contract</option>
                                            <option>Job Opportunity</option>
                                            <option>Provide Feedback</option>
                                            <option>Report a Bug</option>
                                            <option>Other</option>
                                        </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control className={style["contact-page__content__form__text-area"]}  as="textarea" rows="3" />
                                </Form.Group>

                                <p> All fields are required.</p>

                                <br></br>

                                <Button className={style["contact-page__content__form__submit-button"]} type="submit">
                                    <FontAwesomeIcon icon={faEnvelope} size='sm'/> Send Email
                                </Button>
                            </Form>

                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ContactPage;
