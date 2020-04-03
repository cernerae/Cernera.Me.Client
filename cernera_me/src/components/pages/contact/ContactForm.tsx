import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from './ContactForm.module.scss';
import "icons";
import {sendEmail} from '../../Utils';
import { toastr } from "react-redux-toastr";

const ContactForm = ({userEmailAddress}: { userEmailAddress: any}) => {

    let [verify, setVerify]: any[] = useState({
        isVerified: false
    })

    let [email, setEmail]: any[] = useState({
        name: '',
        emailAddress: '',
        subject: '',
        message: '',
        captchaValue: false
    });

    let handleChange = (e: any) => {
        let id = e.target.id;
        let value = e.target.value;
        email[id] = value;
        setEmail(email);
    }

    let handleClick = async (e: any) => {
        e.preventDefault();
        let isVerified = verify['isVerified'];

        if (isVerified === true) {
            let sent = await sendEmail(email, userEmailAddress);
            
            if (sent) {
                toastr.success("Email Sent", "Success");
                setTimeout(() => {window.location.reload(false)},3000)
            } else {
                toastr.error("Email not sent", "Error")
            }
            
        } else {
            toastr.warning("Please verify you are not a robot.", "");
        }
        
    }

    function verifyCallback(response: any) {
        if (response) {
            verify['isVerified'] = true
        } else {
            verify['isVerified'] = false
        }
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

                <ReCAPTCHA
                    sitekey="6Lf7juYUAAAAALJozqycOuk_agcp0btKoVKOxQ9I"
                    onChange={verifyCallback}
                    theme="light"
                />

                <Button className={styles["button_slide_right"]} variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>

            </Form>

                            
        </>
    );
}

export default ContactForm;
