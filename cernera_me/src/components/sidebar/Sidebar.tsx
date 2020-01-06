import React from 'react';
import Gravatar from "react-gravatar";
import style from './Sidebar.module.scss';
import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faHome, faAddressCard, faTools, faUserTie, faPhone, faPenAlt, faEnvelope, faArrowLeft, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBookOpen, faHome, faAddressCard, faTools, faUserTie, faPhone, faPenAlt, faEnvelope, faArrowLeft, faUser, faFileAlt)

const Sidebar: React.FC = () => {
    return (
        <div id="Sidebar">
            <div className={style["sidebar"]}>
                <a className={style["sidebar__menu-item"]} style={{marginBottom: '30%'}} href="/">
                    <FontAwesomeIcon icon={faArrowLeft} size='sm' style={{marginRight: '9%', marginLeft: '3%'}}/>Main Page</a>
   
                <a className={style["sidebar__menu-item"]} href="/gregory">
                    <FontAwesomeIcon icon={faHome} size='sm' style={{marginRight: '8%', marginLeft: '3%'}}/>Home</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="/about">
                    <FontAwesomeIcon icon={faUser} size='sm' style={{marginRight: '9%', marginLeft: '3%'}}/>About Me</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="/resume">
                    <FontAwesomeIcon icon={faFileAlt} size='sm' style={{marginRight: '10%', marginLeft: '3%'}}/>Resume</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                {/*
                <a className={style["sidebar__menu-item"]} href="#">
                    <FontAwesomeIcon icon={faTools} size='sm' style={{marginRight: '8.5%', marginLeft: '3%'}}/>Services</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="#">
                    <FontAwesomeIcon icon={faUserTie} size='sm' style={{marginRight: '9%', marginLeft: '3%'}}/>Clients</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>
                */}
                
                <a className={style["sidebar__menu-item"]} href="http://blog.cernera.me" target="_blank">
                    <FontAwesomeIcon icon={faPenAlt} size='1x' style={{marginRight: '8%', marginLeft: '3%'}}/>Blog</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="/contact">
                    <FontAwesomeIcon icon={faEnvelope} size='sm' style={{marginRight: '8%', marginLeft: '3%'}}/>Contact</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="https://www.linkedin.com/in/gregory-cernera-7930b1140/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size='1x' style={{marginRight: '8%', marginLeft: '3%'}}/>My LinkedIn</a>
            </div>
        </div>
    );
}

export default Sidebar;
