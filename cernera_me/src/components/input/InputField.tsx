import React, { useEffect, useState } from 'react';
import style from './Input.module.scss';
import "icons";

const InputField = ({ title, text, fadeIn }: { title?: string, text: string, fadeIn?: boolean | undefined }) => {

    const [showText, setShowText] = useState(style["main-text-block__content__hide"]);

    useEffect(() => {
        setShowText(style["main-text-block__content__show"]);
    }, []);

    return (
        <div className={style["main-text-block"]}>
            <div className={showText}>
                {title ? <div className={style["main-text-block__content__show__title"]}>{title}</div> : null}
                <div className={style[`main-text-block__content__show__text`]}>{text}</div>
            </div>
        </div>
    );
}

export default InputField;