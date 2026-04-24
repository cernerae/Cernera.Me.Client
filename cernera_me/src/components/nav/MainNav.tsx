import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOnClickOutside } from "lib/hooks";
import {
    userInfoEdward, userInfoGregory, userInfoRobert, userInfoThomas
} from "info/userInfo";
import styles from "./Nav.module.scss";
import { UserInfoType } from "types";
import * as routes from "routes";
import cerneraLogo from "assets/images/cernera-logo.svg";

const MainNav = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useOnClickOutside(ref, () => setIsOpen(false));

    const allUsers: UserInfoType[] = [userInfoEdward, userInfoGregory, userInfoRobert, userInfoThomas]

    return (
        <div className={styles["main-nav"]}>
            <div className={styles["main-nav__items"]}>
                <div>
                    <Link className={styles["main-nav__brand"]} to="/">
                        <img src={cerneraLogo} alt="cernera.me" />
                    </Link>
                </div>
                <div>
                    <div className={[styles["main-nav__item"], styles["main-nav__dropdown"]].join(' ')}>
                        <span className={styles["main-nav__dropdown__dropbtn"]}
                            onClick={toggle}>
                            <FontAwesomeIcon icon={["fast", "bars"]} />
                        </span>
                        <div ref={ref} className={[styles["main-nav__dropdown__dropdown-content"],
                        isOpen ? styles["main-nav__dropdown__dropdown-content-hovered"] : ""].join(' ')}>
                            <a href={routes.ROUTE_POSTS_LIST}>Blog</a>
                            <a href={routes.ROUTE_INIT1_LLC}>init1, LLC</a>
                            {allUsers.map((user, index) =>
                                <Link to={user.rootRoute}>{user.fullName}</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNav;
