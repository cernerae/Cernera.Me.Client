import React, { useEffect, useState } from 'react';
import styles from './ContactForm.module.scss';


const ContactForm: React.FC = () => {

    return (
        <div id="ContactForm" className={styles["contact-page"]}>
            <div className={styles["center"]}> <h1 className={styles["contact-page__title"]}>Contact Me</h1> </div>
            
            <div className={styles["center"]}> <h2 className={styles["contact-page__text"]}>Personal Email: cernerag@gmail.com</h2> </div>
            <div className={styles["center"]}> <h2 className={styles["contact-page__text"]}>Work Email: gregory.cernera@ibm.com</h2> </div>


        </div>
    );
}

export default ContactForm;
