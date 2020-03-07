import React from 'react';
import { UserInfoType } from "types";
import UserCard from "./UserCard";

export const UserPortrait = ({ data, index, style }: { data: UserInfoType[], index: any, style: any }) => {

    return (
        <div style={style}>
            {data ? <UserCard user={data[index]} /> : null}
        </div>
    );
}

export default UserPortrait;
