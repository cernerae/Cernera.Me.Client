import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOnClickOutside } from "lib/hooks";
import styles from "./Nav.module.scss";

const MainNav = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useOnClickOutside(ref, () => setIsOpen(false));

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
                            <a href="https://blog.cernera.me">Blog</a>
                            <Link to={"/edward"}>Edward</Link>
                            <Link to={"/gregory"}>Gregory</Link>
                            <Link to={"/thomas"}>Thomas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNav;
