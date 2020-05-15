import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useWindowSize } from "lib/hooks";
import styles from './ContactForm.module.scss';
import btnStyles from "components/button/Button.module.scss";
import "icons";
import { sendEmail } from '../../Utils';
import { toastr } from "react-redux-toastr";

const ContactForm = ({ userEmailAddress }: { userEmailAddress: any }) => {

    const windowSize = useWindowSize();

    let [errors, setErrors]: any[] = useState({
        nameError: 'test',
        emailError: '',
        subjectError: '',
        messageError: ''
    })

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

        let isValid = validateFields();
        if (!isValid) { return false }

        let isVerified = verify['isVerified'];
        if (isVerified) {
            let sent = await sendEmail(email, userEmailAddress);

            if (sent) {
                toastr.success("Email Sent", "Success");
                setTimeout(() => { window.location.reload(true) }, 3000)
            } else {
                toastr.error("Email not sent", "Error")
            }

        } else {
            const toastrType = 'warning';
            const toastrOptions: any = {
                icon: toastrType,
                status: toastrType
            }
            toastr.light("Please verify you are not a robot.", "", toastrOptions);
        }

    }

    function verifyCallback(response: any) {
        if (response) {
            verify['isVerified'] = true;
            setVerify(verify);
        } else {
            verify['isVerified'] = false;
            setVerify(verify);
        }
    }

    function validateFields() {
        let name = email['name'],
            emailAddress = email['emailAddress'],
            subject = email['subject'],
            message = email['message'];

        let nameError = '',
            emailError = '',
            subjectError = '',
            messageError = '';

        const toastrType = 'error';
        const toastrOptions: any = {
            icon: toastrType,
            status: toastrType
        }

        // Validate name
        if (!name) {
            nameError = `A name is required`;
            toastr.light(nameError, 'Error', toastrOptions);
            return false
        }

        // Validate email
        if (!emailAddress) {
            emailError = `An email is required`;
            toastr.light(emailError, 'Error', toastrOptions);
            return false
        } else if (!emailAddress.includes('@')) {
            emailError = `Email address must contain an '@' symbol`;
            toastr.light(emailError, 'Error', toastrOptions);
            return false
        }

        // Validate subject
        if (!subject) {
            subjectError = `A subject is required`;
            toastr.light(subjectError, 'Error', toastrOptions);
            return false;
        }

        // Validate message
        if (!message) {
            messageError = `A message is required`;
            toastr.light(messageError, 'Error', toastrOptions);
            return false
        }

        return true

    }

    return (
        <>
            <Form className={styles["email-form"]}>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Full name</Form.Label>
                            <Form.Control className={styles["email-form__input"]} id="name" placeholder="" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control className={styles["email-form__input"]} id="emailAddress" placeholder="" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className={styles["email-form__input"]} id="subject" placeholder="" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control className={styles["email-form__textarea"]} id="message" as="textarea" rows="3" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs={windowSize.width > 500 ? "6" : "12"}>
                        <ReCAPTCHA
                            sitekey="6Lf7juYUAAAAALJozqycOuk_agcp0btKoVKOxQ9I"
                            onChange={verifyCallback}
                            theme="light"
                        />
                    </Col>
                    <Col xs={windowSize.width > 500 ? "6" : "12"}>
                        <button className={[btnStyles["btn-submit"], "float-right"].join(' ')} type="submit" onClick={handleClick}>
                            Submit
                        </button>
                    </Col>
                </Form.Row>

            </Form>


        </>
    );
}

export default ContactForm;
