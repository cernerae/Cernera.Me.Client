import React, { useEffect, useState } from 'react';
import style from './MainTextBlock.module.scss';
import "icons";

const MainTextBlock = ({ title, text, fadeIn }: { title: string, text: string, fadeIn?: boolean | undefined }) => {

    const [showText, setShowText] = useState(style["main-text-block__content__hide"]);

    useEffect(() => {
        setShowText(style["main-text-block__content__show"]);
    }, []);

    return (
        <div id="MainTextBlock" className={style["main-text-block"]}>
            <div className={showText}>
                <div className={style["main-text-block__content__show__title"]}>{title}</div>
                <div className={style[`main-text-block__content__show__text`]}>{text}</div>
            </div>
        </div>
    );
}

export default MainTextBlock;
