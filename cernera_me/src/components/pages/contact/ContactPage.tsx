import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
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

    let [email, setEmail]: any[] = useState({
        name: '',
        email_address: '',
        subject: '',
        message: ''
    });

    let handleChange = (e: any) => {
        let id = e.target.id;
        let value = e.target.value;
        email[id] = value;
        setEmail(email);
    }

    let handleClick = (e: any) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            {user ?
                <div id="ContactPage" className={styles["contact-page"]} style={{ overflowY: "hidden" }}>
                    <Sidebar sm={true} slideIn={false} user={user} />
                    <Container className={[genStyle["vertical-center"], styles["contact-page__content__container"]].join(' ')}>
                        <Row className={styles["contact-page__content__container__content"]}>
                            <Col md={12} className={[genStyle["horizontal-center"]].join(' ')}>
                                <UserCard user={user} />
                                
                                    <Form id="email-form">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Your name</Form.Label>
                                            <Form.Control id="name" type="text" placeholder="" onChange={handleChange}/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput2">
                                            <Form.Label>Your email</Form.Label>
                                            <Form.Control id="email_address" type="email" placeholder="" onChange={handleChange}/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput3">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control id="subject" type="text" placeholder="" onChange={handleChange}/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control id="message" as="textarea" rows="3" onChange={handleChange}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" onClick={handleClick}>
                                            Submit
                                        </Button>

                                    </Form>

                            </Col>
                        </Row>
                    </Container>
                </div>
                : history.goBack()}
        </>
    );
}

export default ContactPage;
