import React from 'react';
import Gravatar from "react-gravatar";
import style from './MainTextBlock.module.scss';
import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";

const MainTextBlock = ({ className, title, text }: { className?: string | undefined; title: string, text: string }) => {

    return (
        <div id="MainTextBlock" className={[style["main-text-block"], className].join(' ')}>
            <div className={style["main-text-block__title"]}>{title}</div>
            <div className={style[`main-text-block__text`]}>{text}</div>
        </div>
    );
}

export default MainTextBlock;
