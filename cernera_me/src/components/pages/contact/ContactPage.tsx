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
import * as routes from "routes";

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
                                <Card className={[styles["contact-page__content__container__content__card"], "shadow-sm"].join(' ')}>
                                    <Card.Title className={styles["contact-page__content__container__content__card__title"]}>Contact Me</Card.Title>
                                    <Card.Body className={styles["contact-page__content__container__content__card__body"]}>
                                        {user.socialMedia.linkedin
                                            ? <ContactItem contact_type={'LinkedIn'} contact={`${routes.ROUTE_LINKEDIN}/in/${user.socialMedia.linkedin}`} />
                                            : null}
                                        {user.showEmail && user.contact.work_email
                                            ? <ContactItem contact_type={'Email'} contact={user.contact.work_email} />
                                            : null}
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
