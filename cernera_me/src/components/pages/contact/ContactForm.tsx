import React, { useEffect, useState } from 'react';
import { ListGroup } from "react-bootstrap";
import styles from './ContactForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";


const ContactForm: React.FC = () => {

    const personal_email = `cernerag@gmail.com`,
          work_email = 'gregory.cernera@ibm.com';

    return (
        <div id="ContactForm" className={styles["contact-page"]}>

            <h1 className={styles["contact-page__title"]}>Contact Me</h1>
            
            <h2 className={styles["contact-page__text"]}>Personal Email: {personal_email}</h2>
            <button onClick={() => {navigator.clipboard.writeText(personal_email)}} >Copy Email</button>

            <h2 className={styles["contact-page__text"]}>Work Email: {work_email}</h2>
            <button onClick={() => {navigator.clipboard.writeText(work_email)}} >Copy Email</button>

        </div>
    );
}

export default ContactForm;
