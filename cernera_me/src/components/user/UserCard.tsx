import React from 'react';
import { Link } from "react-router-dom";
import style from './UserCard.module.scss';
import "icons";
import { UserInfoType } from 'types';

const UserCard = ({ user }: { user: UserInfoType }) => {

    return (
        <Link key={`user-card-${user.name}`} className={style["user-card"]} to={user.rootRoute}>
            <div>
                <img className={style["user-card__image"]} src={user.portrait.image} />
                <div className={style["user-card__display-name"]}>{user.fullName}</div>
                <div className={style["user-card__description"]}>{user.title}</div>
            </div>
        </Link>
    );
}

export default UserCard;
