import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './ContactForm.module.scss';
import ContactItem from "components/pages/contact/ContactItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";


const ContactForm: React.FC = () => {

    const personal_email = `cernerag@gmail.com`,
          work_email = 'gregory.cernera@ibm.com';

    return (
        <div id="ContactForm" className={styles["contact-page"]}>

            <h1 className={styles["contact-page__title"]}>Contact Me</h1>

            <ContactItem contact_type={'Personal Email'} contact={personal_email}/>
            <ContactItem contact_type={'Work Email'} contact={work_email}/>


        </div>
    );
}

export default ContactForm;
