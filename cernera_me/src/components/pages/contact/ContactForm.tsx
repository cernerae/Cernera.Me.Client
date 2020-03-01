import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import UserCard from "components/user/UserCard";
import styles_contact from './ContactForm.module.scss';
import styles from './ContactForm.module.scss';
import ed_profile_pic from "assets/images/ed_profile_pic.png";
import greg_profile_pic from "assets/images/greg_profile_pic2.png";
import genStyle from "components/General.module.scss";
import ContactItem from "components/pages/contact/ContactItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "icons";

import { SocialMediaUsernames, ContactInfo } from "types";
import Sidebar from "components/sidebar/Sidebar";


const ContactForm = ({ user, social, contactMe }: { user: string, social: SocialMediaUsernames, contactMe: ContactInfo }) => {

    const getUserPortrait = (username: string) => {
        if (username === "edward") {
            return <UserCard keyName="edward" displayName="Edward Cernera" description="Software Engineer" image={ed_profile_pic} to="/edward" />
        } else if (username === "gregory") {
            return <UserCard keyName="gregory" displayName="Gregory Cernera" description="Software Engineer" image={greg_profile_pic} to="/gregory" />
        }
    }

    return (
        <div id="ContactForm" className={styles_contact["contact-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <Container className={styles["contact-page__content__container"]}>
                <Row className={styles["contact-page__content__container__content"]}>
                    <Col md={12} className={[genStyle["vertical-center"], genStyle["horizontal-center"]].join(' ')}>
                        {getUserPortrait(user)}
                        <Card className={[styles["contact-page__content__container__content__card"], "shadow-sm"].join(' ')}>
                            <Card.Title className={styles["contact-page__content__container__content__card__title"]}>Contact Me</Card.Title>
                            <Card.Body className={styles["contact-page__content__container__content__card__body"]}>
                                <ContactItem contact_type={'Email'} contact={contactMe.personal_email} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactForm;
