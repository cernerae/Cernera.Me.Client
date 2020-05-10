import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import UserCard from "components/user/UserCard";
import ContactForm from "components/pages/contact/ContactForm";
import styles from './ContactPage.module.scss';
import button_styles from '../../Buttons.module.scss';
import genStyle from "components/General.module.scss";
import ContactItem from "components/pages/contact/ContactItem";
import "icons";
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";
import Sidebar from "components/sidebar/Sidebar";
import * as routes from "routes";

import {sendEmail} from '../../Utils';

const ContactPage = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const history = useHistory();

    const user: UserInfoType | undefined = findUser(allUsers, username);

    return (
        <>
            {user ?
                <div id="ContactPage" className={styles["contact-page"]} style={{ overflowY: "hidden" }}>
                    <Sidebar sm={true} slideIn={false} user={user} />
                    <Container className={[genStyle["vertical-center"], styles["contact-page__content__container"]].join(' ')}>
                        <Row className={styles["contact-page__content__container__content"]}>
                            <Col md={12} className={[genStyle["horizontal-center"]].join(' ')}>
                                <UserCard user={user} />
                                <ContactForm userEmailAddress={user.contact.personal_email}/>
                            </Col>
                        </Row>
                    </Container>

                    
                </div>
                : history.goBack()}
        </>
    );
}

export default ContactPage;
