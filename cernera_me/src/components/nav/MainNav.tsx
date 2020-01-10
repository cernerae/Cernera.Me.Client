import React from 'react';
import styles from "./Nav.module.scss";

const MainNav: React.FC = () => {
    return (
        <div className={styles["main-nav"]}>
            <div className={styles["main-nav__items"]}>
                <span className={styles["main-nav__item"]}>Blog</span>
                <span className={styles["main-nav__item"]}>Hello</span>
                <span className={styles["main-nav__item"]}>World</span>
            </div>
        </div>
    );
}

export default MainNav;
