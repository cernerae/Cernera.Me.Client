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

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label >Your Name</Form.Label>
                                            <Form.Control className={style["contact-page__content__form__text-area-name"]} type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label >Your Email Address</Form.Label>
                                            <Form.Control className={style["contact-page__content__form__text-area-email"]} type="email" placeholder="" />
                                        </Form.Group>
                                    </Col>

                                </Row>

                                

                                

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label >Subject</Form.Label>
                                    <Form.Control className={style["contact-page__content__form__text-area-subject"]} type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control className={style["contact-page__content__form__text-area-message"]}  as="textarea" rows="3" />
                                </Form.Group>

                                <p> All fields are required.</p>

                                <br></br>

                                <Button className={style["contact-page__content__form__submit-button"]} type="submit">
                                    <FontAwesomeIcon icon={faEnvelope} size='sm'/> Send Message
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
