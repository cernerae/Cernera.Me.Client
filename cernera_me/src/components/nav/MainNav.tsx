import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOnClickOutside } from "lib/hooks";
import {
    userInfoEdward, userInfoGregory, userInfoRobert
} from "info/userInfo";
import styles from "./Nav.module.scss";
import { UserInfoType } from "types";
import * as routes from "routes";

const MainNav = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useOnClickOutside(ref, () => setIsOpen(false));

    const allUsers: UserInfoType[] = [userInfoEdward, userInfoGregory, userInfoRobert]

    return (
        <div className={styles["main-nav"]}>
            <div className={styles["main-nav__items"]}>
                <div className="float-left">
                    <Link className={styles["main-nav__brand"]} to="/">
                        <span>c.me</span>
                    </Link>
                </div>
                <div className="float-right">
                    <div className={[styles["main-nav__item"], styles["main-nav__dropdown"]].join(' ')}>
                        <span className={styles["main-nav__dropdown__dropbtn"]}
                            onClick={toggle}>
                            <FontAwesomeIcon icon={["fas", "bars"]} />
                        </span>
                        <div ref={ref} className={[styles["main-nav__dropdown__dropdown-content"],
                        isOpen ? styles["main-nav__dropdown__dropdown-content-hovered"] : ""].join(' ')}>
                            <a href={routes.ROUTE_BLOG}>Blog</a>
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
