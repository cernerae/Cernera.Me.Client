import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import styles_contact from './ContactForm.module.scss';
import styles from 'components/pages/LandingPage.module.scss';

import ContactItem from "components/pages/contact/ContactItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";

import { SocialMediaUsernames, ContactInfo } from "types";
import Sidebar from "components/sidebar/Sidebar";


const ContactForm = ({ user, social, contactMe }: { user: string, social: SocialMediaUsernames, contactMe: ContactInfo }) => {


    return (
        <div id="ContactForm" className={styles_contact["contact-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <div className={styles["landing-page__content"]}>

                <Container className={styles["landing-page__content__container"]}>

                    <Row className="h-100">
                        <Col md={1} className={styles["landing-page__content__container__vertical-center"]}>
                            <h1 className={styles_contact["contact-page__title"]}>Contact Me</h1>
                        </Col>
                    </Row>

                    <Row className="h-100">
                        <Col md={12} className={styles["landing-page__content__container__vertical-center"]}>
                            <ContactItem contact_type={'Personal Email'} contact={contactMe.personal_email}/>
                            <ContactItem contact_type={'Work Email'} contact={contactMe.work_email}/>
                        </Col>
                    </Row>

                </Container>
            </div>

            

            


        </div>
    );
}

export default ContactForm;
