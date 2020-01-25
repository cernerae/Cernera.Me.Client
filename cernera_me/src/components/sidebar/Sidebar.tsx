import React, { useEffect, useState } from 'react';
import Gravatar from "react-gravatar";
import { Link, useHistory } from "react-router-dom";
import style from './Sidebar.module.scss';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMediaUsernames } from "types";
import "icons";

const Sidebar = (
    { sm, user, social, slideIn }:
        { sm: boolean; user?: string, social?: SocialMediaUsernames, slideIn?: boolean | undefined }
) => {

    const [showSidebar, setShowSidebar] = useState(slideIn ? style["sidebar-hide-left"] : "");
    let history = useHistory();

    useEffect(() => {
        slideIn ? setShowSidebar(style["sidebar-slide-right"]) : setShowSidebar("");
    }, []);

    const sidebarType = sm ? "small" : "full";

    return (
        <div id="Sidebar" className={[style["sidebar"], showSidebar].join(' ')}>
            <div className={style[`sidebar__${sidebarType}`]}>
                <Link to="/">
                    <div className={style[`sidebar__${sidebarType}__brand`]}>c.me</div>
                </Link>
                <div className={style[`sidebar__${sidebarType}__menu`]}>
                    <Link to={`/${user}`}>
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "home"]} />
                        </div>
                    </Link>
                    <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}
                        onClick={() => { history.push(`/${user}/projects`) }}>
                        <FontAwesomeIcon icon={["fas", "project-diagram"]} />
                    </div>
                    <Link to={`/${user}`}>
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "award"]} />
                        </div>
                    </Link>
                    <Link to={`/${user}`}>
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "file-alt"]} />
                        </div>
                    </Link>
                    <Link to={`/${user}`}>
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fas", "envelope"]} />
                        </div>
                    </Link>
                </div>
                <div className={style[`sidebar__${sidebarType}__footer`]}>
                    <a href={`https://www.github.com/${social ? social?.github : ""}`} target="_blank" rel="noopener noreferrer">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </div>
                    </a>
                    <a href={`https://www.hackerrank.com/${social ? social.hackerrank : ""}`} target="_blank" rel="noopener noreferrer">
                        <div className={style[`sidebar__${sidebarType}__menu__menu-item`]}>
                            <FontAwesomeIcon icon={["fab", "hackerrank"]} />
                        </div>
                    </a>
                    <a href={`https://www.linkedin.com/in/${social ? social.linkedin : ""}`} target="_blank" rel="noopener noreferrer">
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
