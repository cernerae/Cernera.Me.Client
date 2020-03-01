import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import style from './UserCard.module.scss';
import "icons";

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
                <img className={style["user-card__image"]} src={image} />
                <div className={style["user-card__display-name"]}>{displayName}</div>
                <div className={style["user-card__description"]}>{description}</div>
            </div>
        </div>
    );
}

export default UserCard;
