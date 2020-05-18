import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "lib/hooks";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Form } from "react-bootstrap";
import styles from './ContactForm.module.scss';
import btnStyles from "components/button/Button.module.scss";
import "icons";
import { sendEmail } from '../../Utils';
import { toastr } from "react-redux-toastr";
import { sendContactEmailAction } from "store/actionCreators";
import { sendContactEmailReducerResponse } from "store/selectors";
import { SendContactEmailRequestType, SendContactEmailResponseType } from "types";

type SendContactEmailForm = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const ContactForm = ({ userEmailAddress }: { userEmailAddress: string }) => {

    const windowSize = useWindowSize();

    const history = useHistory();
    const dispatch = useDispatch();

    const contactEmailResponseData: SendContactEmailResponseType[] = useSelector(state =>
        sendContactEmailReducerResponse(state)
    );

    const [verifyCaptcha, setVerifyCaptcha] = useState(false);

    const [contactEmailForm, setContactEmailForm] = useState<SendContactEmailForm>(
        {
            name: undefined,
            email: undefined,
            subject: undefined,
            message: undefined
        }
    )

    const isButtonDisabled = (captchaStatus: boolean, form: SendContactEmailForm): boolean => {
        if (captchaStatus &&
            form.name &&
            form.email &&
            form.subject &&
            form.message) {
            return false;
        } else {
            return true;
        }
    }

    let handleClick = async (e: any) => {
        e.preventDefault();

        if (verifyCaptcha &&
            contactEmailForm.name &&
            contactEmailForm.email &&
            contactEmailForm.subject &&
            contactEmailForm.message) {
            const request: SendContactEmailRequestType = {
                body: {
                    name: contactEmailForm.name,
                    email: contactEmailForm.email,
                    subject: contactEmailForm.subject,
                    message: contactEmailForm.message,
                    toEmail: userEmailAddress
                }
            };
            let sent = dispatch(sendContactEmailAction(request));

            if (sent) {
                toastr.success("Email Sent", "Success");
                setTimeout(() => { window.location.reload(true) }, 3000)
            } else {
                toastr.error("Email not sent", "Error")
            }
        } else if (!verifyCaptcha) {
            const toastrType = 'warning';
            const toastrOptions: any = {
                icon: toastrType,
                status: toastrType
            }
            toastr.light("Please verify you are not a robot.", "", toastrOptions);
            console.log(`Form not complete. Debug: ${verifyCaptcha}, ${contactEmailForm.name}, 
            ${contactEmailForm.email}, ${contactEmailForm.subject}, ${contactEmailForm.message}`)
        } else {
            const toastrType = 'warning';
            const toastrOptions: any = {
                icon: toastrType,
                status: toastrType
            }
            toastr.light("Please complete all fields", "", toastrOptions);
            console.log(`Form not complete. Debug: ${verifyCaptcha}, ${contactEmailForm.name}, 
            ${contactEmailForm.email}, ${contactEmailForm.subject}, ${contactEmailForm.message}`)
        }

    }

    return (
        <>
            <Form className={styles["email-form"]}>
                {process.env.REACT_APP_CAPTCHA_SITEKEY ?
                    <>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control
                                        className={styles["email-form__input"]}
                                        id="name"
                                        placeholder="example@gmail.com"
                                        onChange={(e: any) => {
                                            if (e.target instanceof HTMLInputElement) {
                                                const value = e.target.value;
                                                setContactEmailForm((state): typeof state => ({
                                                    ...state,
                                                    name: value
                                                }));
                                            }
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        className={styles["email-form__input"]}
                                        id="emailAddress"
                                        placeholder=""
                                        onChange={(e: any) => {
                                            if (e.target instanceof HTMLInputElement) {
                                                const value = e.target.value;
                                                setContactEmailForm((state): typeof state => ({
                                                    ...state,
                                                    email: value
                                                }));
                                            }
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        className={styles["email-form__input"]}
                                        id="subject"
                                        placeholder=""
                                        onChange={(e: any) => {
                                            if (e.target instanceof HTMLInputElement) {
                                                const value = e.target.value;
                                                setContactEmailForm((state): typeof state => ({
                                                    ...state,
                                                    subject: value
                                                }));
                                            }
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        className={styles["email-form__textarea"]}
                                        id="message"
                                        as="textarea"
                                        rows="3"
                                        onChange={(e: any) => {
                                            if (e.target instanceof HTMLTextAreaElement) {
                                                const value = e.target.value;
                                                setContactEmailForm((state): typeof state => ({
                                                    ...state,
                                                    message: value
                                                }));
                                            }
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col xs={windowSize.width > 500 ? "6" : "12"}>
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_CAPTCHA_SITEKEY}
                                    onChange={(e) => {
                                        console.log("Verifying CAPTCHA...");
                                        setVerifyCaptcha(true);
                                    }}
                                    theme="light"
                                />
                            </Col>
                            <Col xs={windowSize.width > 500 ? "6" : "12"}>
                                <button className={[btnStyles["btn-submit"], "float-right"].join(' ')}
                                    type="submit"
                                    disabled={isButtonDisabled(verifyCaptcha, contactEmailForm)}
                                    onClick={handleClick}>
                                    Submit
                        </button>
                            </Col>
                        </Form.Row>
                    </>
                    : null}
            </Form>


        </>
    );
}

export default ContactForm;
