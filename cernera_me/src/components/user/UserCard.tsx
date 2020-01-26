import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Gravatar from "react-gravatar";
import { Dropdown } from 'react-bootstrap';
import style from './UserCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";
import { url } from 'inspector';
import { setTimeout } from 'timers';

type UserCardProps = {
    keyName: string,
    displayName: string,
    description: string,
    image: string,
    to: string
}

const UserCard = ({ keyName, displayName, description, image, to }: UserCardProps) => {

    const [cardClicked, setCardClicked] = useState(false);
    let history = useHistory();
    const path = `/${keyName}`;

    const handleOnClick = (event: any) => {
        event.preventDefault();
        setCardClicked(true);
        history.push(to);
    }

    return (
        <div key={keyName} className={style["user-card"]}>
            <div>
                <img src={image} />
                <div className={style["user-card__display-name"]}>{displayName}</div>
            </div>
        </div>
    );
}

export default UserCard;
