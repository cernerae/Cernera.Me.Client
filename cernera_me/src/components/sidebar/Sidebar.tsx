import React from 'react';
import Gravatar from "react-gravatar";
import style from './Sidebar.module.scss';
import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";

const Sidebar = ({ sm }: { sm: boolean }) => {

    const sidebarType = sm ? "small" : "full";

    return (
        <div id="Sidebar" className={style["sidebar"]}>
            <div className={style[`sidebar__${sidebarType}`]}>
                <div className={style[`sidebar__${sidebarType}__brand`]}>
                    c.me
                    { /* <FontAwesomeIcon icon={["fas", "arrow-left"]} /><span>Main Page</span> */}
                </div>
                <div className={style[`sidebar__${sidebarType}__menu`]}>
                    <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                    </div>
                    <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </div>
                    <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                    </div>
                    <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
