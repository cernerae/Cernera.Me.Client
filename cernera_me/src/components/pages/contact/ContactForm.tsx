import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "lib/hooks";
import log from "loglevel";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Form } from "react-bootstrap";
import styles from "./ContactForm.module.scss";
import btnStyles from "components/button/Button.module.scss";
import "icons";
import { sendContactEmailAction } from "store/actionCreators";
import { sendContactEmailReducerResponse } from "store/selectors";
import {
  SendContactEmailRequestType,
  SendContactEmailResponseType,
} from "types";

type SendContactEmailForm = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const defaultForm: SendContactEmailForm = {
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
};

const ContactForm = ({ userEmailAddress }: { userEmailAddress: string }) => {
  const windowSize = useWindowSize();

  const history = useHistory();
  const dispatch = useDispatch();

  const contactEmailResponseData: SendContactEmailResponseType[] = useSelector(
    (state) => sendContactEmailReducerResponse(state)
  );

  const [verifyCaptcha, setVerifyCaptcha] = useState(false);

  const [contactEmailForm, setContactEmailForm] = useState<
    SendContactEmailForm
  >(defaultForm);

  const isButtonDisabled = (
    captchaStatus: boolean,
    form: SendContactEmailForm
  ): boolean => {
    if (
      captchaStatus &&
      form.name &&
      form.email &&
      form.subject &&
      form.message
    ) {
      return false;
    } else {
      return true;
    }
  };

  let handleClick = async (e: any) => {
    e.preventDefault();

    if (
      verifyCaptcha &&
      contactEmailForm.name &&
      contactEmailForm.email &&
      contactEmailForm.subject &&
      contactEmailForm.message
    ) {
      const request: SendContactEmailRequestType = {
        body: {
          name: contactEmailForm.name,
          email: contactEmailForm.email,
          subject: contactEmailForm.subject,
          message: contactEmailForm.message,
          toEmail: userEmailAddress,
        },
      };
      dispatch(sendContactEmailAction(request));
      log.info("Clearing form...");
      setContactEmailForm(defaultForm);
      log.info("Form: %o", contactEmailForm);
    } else if (!verifyCaptcha) {
      const toastrType = "warning";
      const toastrOptions: any = {
        icon: toastrType,
        status: toastrType,
      };
      log.info(`Form not complete. Debug: ${verifyCaptcha}, ${contactEmailForm.name}, 
            ${contactEmailForm.email}, ${contactEmailForm.subject}, ${contactEmailForm.message}`);
    } else {
      const toastrType = "warning";
      const toastrOptions: any = {
        icon: toastrType,
        status: toastrType,
      };
      log.info(`Form not complete. Debug: ${verifyCaptcha}, ${contactEmailForm.name}, 
            ${contactEmailForm.email}, ${contactEmailForm.subject}, ${contactEmailForm.message}`);
    }
  };

  const getButtonClassname = (windowWidth: number) => {
    let classes: String[] = [];
    classes.push(btnStyles["btn-submit"]);
    if (windowWidth > 600) {
      classes.push("float-right");
    } else {
      classes.push(btnStyles["btn-block"]);
    }
    return classes.join(" ");
  };
  return (
    <>
      <Form className={styles["email-form"]}>
        {process.env.REACT_APP_CAPTCHA_SITEKEY ? (
          <>
            <Form.Row>
              <Col xs={12} sm={6}>
                <Form.Group>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    className={styles["email-form__input"]}
                    id="name"
                    placeholder="Your Name"
                    onChange={(e: any) => {
                      if (e.target instanceof HTMLInputElement) {
                        const value = e.target.value;
                        setContactEmailForm((state): typeof state => ({
                          ...state,
                          name: value,
                        }));
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className={styles["email-form__input"]}
                    id="emailAddress"
                    placeholder="Your Email"
                    onChange={(e: any) => {
                      if (e.target instanceof HTMLInputElement) {
                        const value = e.target.value;
                        setContactEmailForm((state): typeof state => ({
                          ...state,
                          email: value,
                        }));
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col xs={12} sm={6}>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    className={styles["email-form__input"]}
                    id="subject"
                    placeholder="Hello!"
                    onChange={(e: any) => {
                      if (e.target instanceof HTMLInputElement) {
                        const value = e.target.value;
                        setContactEmailForm((state): typeof state => ({
                          ...state,
                          subject: value,
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
                    placeholder="What would you like to say?"
                    onChange={(e: any) => {
                      if (e.target instanceof HTMLTextAreaElement) {
                        const value = e.target.value;
                        setContactEmailForm((state): typeof state => ({
                          ...state,
                          message: value,
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
                    log.info("Verifying CAPTCHA...");
                    setVerifyCaptcha(true);
                  }}
                  theme="light"
                />
              </Col>
              <Col xs={windowSize.width > 500 ? "6" : "12"}>
                <button
                  className={getButtonClassname(windowSize.width)}
                  type="submit"
                  disabled={isButtonDisabled(verifyCaptcha, contactEmailForm)}
                  onClick={handleClick}
                >
                  Submit
                </button>
              </Col>
            </Form.Row>
          </>
        ) : null}
      </Form>
    </>
  );
};

export default ContactForm;
