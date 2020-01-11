import React, { useEffect, useState } from 'react';
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import style from './Sidebar.module.scss';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";
import generalStyles from "components/General.module.scss";

const Sidebar = ({ className, sm }: { className?: string | undefined; sm: boolean }) => {

    const sidebarType = sm ? "small" : "full";

    return (
        <div id="Sidebar" className={[className, style["sidebar"]].join(' ')}>
            <div className={style[`sidebar__${sidebarType}`]}>
                <Link to="/">
                    <div className={style[`sidebar__${sidebarType}__brand`]}>c.me</div>
                </Link>
                <div className={style[`sidebar__${sidebarType}__menu`]}>
                    <Link to="/">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "home"]} />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "project-diagram"]} />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "award"]} />
                        </div>
                    </Link>
                </div>
                <div className={style[`sidebar__${sidebarType}__footer`]}>
                    <a href="https://www.github.com/cernerae" target="_blank" rel="noopener noreferrer">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </div>
                    </a>
                    <a href="https://www.hackerrank.com/cernerae" target="_blank" rel="noopener noreferrer">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fab", "hackerrank"]} />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/edwardcernera" target="_blank" rel="noopener noreferrer">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
