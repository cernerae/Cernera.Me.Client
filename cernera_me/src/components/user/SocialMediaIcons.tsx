import React, { useState } from 'react';
import { SocialMediaUsernamesType, ContactInfoType } from "types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './SocialMediaIcons.module.scss';
import "icons";

const SocialMediaIcons = ({ social }: { social: SocialMediaUsernamesType }) => {

    return (
        <div className={style["social-media-icons"]}>
            <div>
                {social.linkedin ?
                    <a href={`https://www.linkedin.com/in/${social.linkedin ? social.linkedin : ""}`}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} className={style["social-media-icons__icon"]} />
                    </a>
                    : null}
                {social.github ?
                    <a href={`https://www.github.com/${social.github ? social.github : ""}`}>
                        <FontAwesomeIcon icon={["fab", "github"]} className={style["social-media-icons__icon"]} />
                    </a>
                    : null}
                {social.hackerrank ?
                    <a href={`https://www.hackerrank.com/${social.hackerrank ? social.hackerrank : ""}`}>
                        <FontAwesomeIcon icon={["fab", "hackerrank"]} className={style["social-media-icons__icon"]} />
                    </a>
                    : null}
            </div>
        </div>
    );
}

export default SocialMediaIcons;
