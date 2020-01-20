import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import styles from './ContactItem.module.scss';


const ContactItem = ({contact_type, contact}: {contact_type: string, contact: string}) => {
    return (
        <div id="ContactItem" className={styles["contact-item"]}>

            <Container className={styles["contact-item__container"]}>
                <Row>
                    <Col sm={3} className={styles["contact-item__container__label-row"]}>
                        <h2 className={styles["contact-item__container__text"]}> {contact_type}: </h2>
                    </Col>

                    <Col sm={5} className={styles["contact-item__container__info-row"]}>
                        <h2 className={styles["contact-item__container__text"]}>{contact}</h2>
                    </Col>

                    <Col sm={3} className={styles["contact-item__container__button row"]}>
                        <Button 
                            className={styles["contact-item__container__copy-button"]} 
                            onClick={() => {navigator.clipboard.writeText(contact)}}>Copy
                        </Button>
                    </Col>

                </Row> 
            </Container>
            
    
        </div>
    );
}

export default ContactItem;
