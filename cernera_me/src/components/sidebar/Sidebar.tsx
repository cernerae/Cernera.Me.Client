import React from 'react';
import style from './Sidebar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faHome, faAddressCard, faTools, faUserTie, faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBookOpen, faHome, faAddressCard, faTools, faUserTie, faPhone)

const Sidebar: React.FC = () => {
    return (
        <div id="Sidebar">
            <div className={style["sidebar"]}>

                <a className={style["sidebar__menu-item"]} href="/">
                    <FontAwesomeIcon icon={faHome} size='sm' style={{marginRight: '8%'}}/>Home</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="/about">
                    <FontAwesomeIcon icon={faAddressCard} size='sm' style={{marginRight: '8%'}}/>About</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="#">
                    <FontAwesomeIcon icon={faTools} size='sm' style={{marginRight: '8.5%'}}/>Services</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="#">
                    <FontAwesomeIcon icon={faUserTie} size='sm' style={{marginRight: '9%'}}/>Clients</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

                <a className={style["sidebar__menu-item"]} href="#">
                    <FontAwesomeIcon icon={faPhone} size='sm' style={{marginRight: '8%'}}/>Contact</a>
                <hr className={style["sidebar__horizontal-bar"]}></hr>

            </div>
        </div>
    );
}

export default Sidebar;
