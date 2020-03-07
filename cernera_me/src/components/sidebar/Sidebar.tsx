import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMediaUsernamesType } from "types";
import "icons";

const Sidebar = (
    { sm, user, social, slideIn }:
        { sm: boolean; user?: string, social?: SocialMediaUsernamesType, slideIn?: boolean | undefined }
) => {

    const [showSidebar, setShowSidebar] = useState(slideIn ? style["sidebar-hide-left"] : "");
    let history = useHistory();
    let location = useLocation();

    const [isHomeItemHovered, setIsHomeItemHovered] = useState<boolean>(false);
    const [isUserItemHovered, setIsUserItemHovered] = useState<boolean>(false);
    const [isProjectsItemHovered, setIsProjectsItemHovered] = useState<boolean>(false);
    const [isResumeItemHovered, setIsResumeItemHovered] = useState<boolean>(false);
    const [isContactItemHovered, setIsContactItemHovered] = useState<boolean>(false);

    useEffect(() => {
        slideIn ? setShowSidebar(style["sidebar-slide-right"]) : setShowSidebar("");
    }, []);

    const sidebarType = sm ? "small" : "full";
    const sidebarMenuItemIconClass = `sidebar__${sidebarType}__menu__main__menu-item__icon`
    const sidebarMenuItemLabelClass = `sidebar__${sidebarType}__menu__main__menu-item__label`
    const sidebarMenuItemLabelSelectedClass = `${sidebarMenuItemLabelClass}__selected`

    const aboutPageSelected: boolean | "" | undefined = user && location.pathname.endsWith(user);
    const projectsPageSelected: boolean | "" | undefined = location.pathname.endsWith('projects');
    const resumePageSelected: boolean | "" | undefined = location.pathname.endsWith('resume');
    const contactPageSelected: boolean | "" | undefined = location.pathname.endsWith('contact');
    console.log("About Page Selected? : " + aboutPageSelected)

    return (
        <div id="Sidebar" className={[style["sidebar"], showSidebar].join(' ')}>
            <div className={style[`sidebar__${sidebarType}`]}>
                <Link to="/">
                    <div className={style[`sidebar__${sidebarType}__brand`]}>c.me</div>
                </Link>
                <div className={style[`sidebar__${sidebarType}__menu`]}>
                    <div className={style[`sidebar__${sidebarType}__menu__main`]}>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push('/') }}
                            onMouseEnter={() => setIsHomeItemHovered(true)}
                            onMouseLeave={() => setIsHomeItemHovered(false)}>
                            {!isHomeItemHovered ?
                                <>
                                    <FontAwesomeIcon className={style[sidebarMenuItemIconClass]} icon={["fas", "home"]} />
                                </> : <div className={style[sidebarMenuItemLabelClass]}>Home</div>}
                        </div>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}`) }}
                            onMouseEnter={() => setIsUserItemHovered(true)}
                            onMouseLeave={() => setIsUserItemHovered(false)}>
                            {!aboutPageSelected && !isUserItemHovered ?
                                <>
                                    <FontAwesomeIcon className={style[sidebarMenuItemIconClass]} icon={["fas", "user"]} />
                                </> : <div className={style[sidebarMenuItemLabelClass]}>About</div>}
                        </div>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}/projects`) }}
                            onMouseEnter={() => setIsProjectsItemHovered(true)}
                            onMouseLeave={() => setIsProjectsItemHovered(false)}
                        >
                            {!projectsPageSelected && !isProjectsItemHovered ?
                                <>
                                    <FontAwesomeIcon className={style[sidebarMenuItemIconClass]}
                                        icon={["fas", "project-diagram"]} />
                                </> : <div className={style[sidebarMenuItemLabelClass]}>Projects</div>}
                        </div>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}/resume`) }}
                            onMouseEnter={() => setIsResumeItemHovered(true)}
                            onMouseLeave={() => setIsResumeItemHovered(false)}>
                            {!resumePageSelected && !isResumeItemHovered ?
                                <>
                                    <FontAwesomeIcon className={style[sidebarMenuItemIconClass]} icon={["fas", "file-alt"]} />
                                </> : <div className={style[sidebarMenuItemLabelClass]}>Resume</div>}
                        </div>
                        <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                            onClick={() => { history.push(`/${user}/contact`) }}
                            onMouseEnter={() => setIsContactItemHovered(true)}
                            onMouseLeave={() => setIsContactItemHovered(false)}>
                            {!contactPageSelected && !isContactItemHovered ?
                                <>
                                    <FontAwesomeIcon className={style[sidebarMenuItemIconClass]} icon={["fas", "envelope"]} />
                                </> : <div className={style[sidebarMenuItemLabelClass]}>Contact</div>}
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
