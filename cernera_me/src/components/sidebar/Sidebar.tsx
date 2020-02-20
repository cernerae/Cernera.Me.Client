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
                    <div className={style[`sidebar__${sidebarType}__menu__main`]}>
                        <Link to={`/`}>
                            <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}>
                                <FontAwesomeIcon icon={["fas", "home"]} />
                                <br></br>
                                <div className={style[`sidebar__${sidebarType}__menu__main__menu-text`]}>Home</div>
                            </div>
                        </Link>
                        <Link to={`/${user}`}>
                            <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}>
                                <FontAwesomeIcon icon={["fas", "user"]} />
                                <div className={style[`sidebar__${sidebarType}__menu__main__menu-text`]}>About</div>
                            </div>
                        </Link>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}/projects`) }}>
                            <FontAwesomeIcon icon={["fas", "project-diagram"]} />
                            <div className={style[`sidebar__${sidebarType}__menu__main__menu-text`]}>Projects</div>
                        </div>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}/resume`) }}>
                            <FontAwesomeIcon icon={["fas", "file-alt"]} />
                            <div className={style[`sidebar__${sidebarType}__menu__main__menu-text`]}>Resume</div>
                        </div>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}/contact`) }}>
                            <FontAwesomeIcon icon={["fas", "envelope"]} />
                            <div className={style[`sidebar__${sidebarType}__menu__main__menu-text`]}>Contact Me</div>
                        </div>
                    </div>
                    <div className={style[`sidebar__${sidebarType}__menu__footer`]}>
                        <a href={`https://www.github.com/${social ? social?.github : ""}`} target="_blank" rel="noopener noreferrer">
                            <div className={style[`sidebar__${sidebarType}__menu__footer__menu-item`]}>
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </div>
                        </a>
                        <a href={`https://www.hackerrank.com/${social ? social.hackerrank : ""}`} target="_blank" rel="noopener noreferrer">
                            <div className={style[`sidebar__${sidebarType}__menu__footer__menu-item`]}>
                                <FontAwesomeIcon icon={["fab", "hackerrank"]} />
                            </div>
                        </a>
                        <a href={`https://www.linkedin.com/in/${social ? social.linkedin : ""}`} target="_blank" rel="noopener noreferrer">
                            <div className={style[`sidebar__${sidebarType}__menu__footer__menu-item`]}>
                                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
