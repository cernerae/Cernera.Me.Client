import React from 'react';
import Gravatar from "react-gravatar";
import style from './MainTextBlock.module.scss';
import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";

const MainTextBlock = ({ title, text }: { title: string, text: string }) => {

    return (
        <div id="MainTextBlock" className={style["main-text-block"]}>
            <div className={style["main-text-block__title"]}>{title}</div>
            <div className={style[`main-text-block__text`]}>{text}</div>
        </div>
    );
}

export default MainTextBlock;
