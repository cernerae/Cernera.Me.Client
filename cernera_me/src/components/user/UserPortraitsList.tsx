import React from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import UserPortrait from "./UserPortrait";
import { UserInfoType } from "types";

export const UserPortraitsList = ({ users }: { users: UserInfoType[] | undefined }) => {

    const windowSize = useWindowSize();

    return (
        <List
            style={{ marginLeft: "auto", marginRight: "auto" }}
            height={windowSize.width > 1000 ? 300 : 300} // height of window
            itemData={users}
            itemCount={users ? users.length : 0}
            itemSize={windowSize.width > 1000 ? 300 : 110} // width of item
            layout="horizontal"
            width={windowSize.width > 1000 ? 900 : 330} // width of window
        >
            {UserPortrait}
        </List>
    );
}

export default UserPortraitsList;
