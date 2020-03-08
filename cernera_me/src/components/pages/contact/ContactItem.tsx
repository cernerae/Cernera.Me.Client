import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from './ContactItem.module.scss';
import { toastr } from "react-redux-toastr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactItem = ({ contact_type, contact }: { contact_type: string, contact: string }) => {

    return (
        <div className={styles["contact-item"]}>
            <Container className={styles["contact-item__container"]}>
                <Row>
                    <Col xs={12} sm={3}>
                        <p className={styles["contact-item__container__label"]}>{contact_type}</p>
                    </Col>
                    <Col xs={12} sm={9}>
                        <span className={styles["contact-item__container__text"]}>{contact}</span>
                        {!navigator.vendor.includes('Apple') &&
                            <span><FontAwesomeIcon
                                icon={["fas", "copy"]}
                                className={styles["contact-item__copy-icon"]}
                                onClick={() => {
                                    navigator.clipboard.writeText(contact)
                                    toastr.success("Email Copied", "Success")
                                }} /></span>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactItem;
