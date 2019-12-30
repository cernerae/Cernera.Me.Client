import React from 'react';
import style from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
    return (
        <div id="Sidebar">
            <div className={style["sidebar"]}>
                <a className={style["sidebar__menu-item"]} href="/about">About</a>
                <a className={style["sidebar__menu-item"]} href="#">Services</a>
                <a className={style["sidebar__menu-item"]} href="#">Clients</a>
                <a className={style["sidebar__menu-item"]} href="#">Contact</a>
            </div>
        </div>
    );
}

export default Sidebar;
