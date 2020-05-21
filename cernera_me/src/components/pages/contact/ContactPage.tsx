import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserCard from "components/user/UserCard";
import ContactForm from "components/pages/contact/ContactForm";
import styles from './ContactPage.module.scss';
import genStyle from "components/General.module.scss";
import "icons";
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";
import Sidebar from "components/sidebar/Sidebar";

const ContactPage = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const history = useHistory();

    const user: UserInfoType | undefined = findUser(allUsers, username);

    return (
        <>
            {user ?
                <div id="ContactPage" className={styles["contact-page"]}>
                    <Sidebar sm={true} slideIn={false} user={user} />
                    <Container className={[genStyle["vertical-center"], styles["contact-page__content__container"]].join(' ')}>
                        <Row className={styles["contact-page__content__container__content"]}>
                            <Col md={12} className={[genStyle["horizontal-center"]].join(' ')}>
                                <UserCard user={user} />
                                {user.contact.personal_email ?
                                    <>
                                        <div className={styles["contact-page__content__container__content__main-text"]}>
                                            <p>Pass me a note!
                                                <span><FontAwesomeIcon style={{ marginLeft: "10px" }} icon={["fas", "paper-plane"]} /></span>
                                            </p>
                                        </div>
                                        <ContactForm userEmailAddress={user.contact.personal_email} />
                                    </>
                                    : null}
                            </Col>
                        </Row>
                    </Container>


                </div>
                : history.goBack()}
        </>
    );
}

export default ContactPage;
