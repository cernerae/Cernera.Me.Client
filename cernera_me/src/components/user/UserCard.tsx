import React from "react";
import { Link } from "react-router-dom";
import style from "./User.module.scss";
import genStyle from "components/General.module.scss";
import "icons";
import { UserInfoType } from "types";

const UserCard = ({
  user,
  clickDisabled,
  useFirstNameOnly,
  hideTitle,
}: {
  user: UserInfoType;
  clickDisabled?: boolean;
  useFirstNameOnly?: boolean;
  hideTitle?: boolean;
}) => {
  return (
    <Link
      key={`user-card-${user.name}`}
      className={style["user-card"]}
      to={user.rootRoute}
    >
      <div>
        <img
          className={
            style[
              !clickDisabled ? "user-card__image" : "user-card__image__noclick"
            ]
          }
          src={user.portrait.image}
          alt={`${user.fullName}`}
        />
        <div className={style["user-card__display-name"]}>
          {!useFirstNameOnly ? user.fullName : user.fullName.split(" ")[0]}
        </div>
        <div className={style["user-card__description"]}>
          {hideTitle ? null : user.title}
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
