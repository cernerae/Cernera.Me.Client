import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import UserCard from "components/user/UserCard";
import styles from './ContactPage.module.scss';
import genStyle from "components/General.module.scss";
import ContactItem from "components/pages/contact/ContactItem";
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
                <div id="ContactForm" className={styles["contact-page"]}>
                    <Sidebar sm={true} slideIn={false} user={user.name} social={user.socialMedia} />
                    <Container className={styles["contact-page__content__container"]}>
                        <Row className={styles["contact-page__content__container__content"]}>
                            <Col md={12} className={[genStyle["vertical-center"], genStyle["horizontal-center"]].join(' ')}>
                                <UserCard user={user} />
                                <Card className={[styles["contact-page__content__container__content__card"], "shadow-sm"].join(' ')}>
                                    <Card.Title className={styles["contact-page__content__container__content__card__title"]}>Contact Me</Card.Title>
                                    <Card.Body className={styles["contact-page__content__container__content__card__body"]}>
                                        <ContactItem contact_type={'Email'} contact={user.contact.personal_email} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                : history.goBack()}
        </>
    );
}

export default ContactPage;
