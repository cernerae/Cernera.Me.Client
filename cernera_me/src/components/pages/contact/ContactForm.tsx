import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from './ContactForm.module.scss';
import "icons";
import {sendEmail} from '../../Utils';

const ContactForm = ({userEmailAddress}: { userEmailAddress: any}) => {

    let [email, setEmail]: any[] = useState({
        name: '',
        emailAddress: '',
        subject: '',
        message: ''
    });

    let handleChange = (e: any) => {
        let id = e.target.id;
        let value = e.target.value;
        email[id] = value;
        setEmail(email);
    }

    let handleClick = (e: any) => {
        e.preventDefault();
        sendEmail(email, userEmailAddress);
    }

    return (
        <>
            <Form className={styles["email-form"]}>
                <Form.Row>

                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control className={styles["email-form__text-area"]} id="name" placeholder="" onChange={handleChange}/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control className={styles["email-form__text-area"]} id="emailAddress" placeholder="" onChange={handleChange}/>
                        </Form.Group>
                    </Col>

                </Form.Row>
                
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control className={styles["email-form__text-area"]} id="subject" placeholder="" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control className={styles["email-form__text-area"]} id="message" as="textarea" rows="3" onChange={handleChange}/>
                </Form.Group>

                <Button className={styles["button_slide_right"]} variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>

            </Form>

                            
        </>
    );
}

export default ContactForm;
