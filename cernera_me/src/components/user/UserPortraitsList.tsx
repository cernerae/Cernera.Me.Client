import React from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import UserPortrait from "./UserPortrait";
import { UserInfoType, UserPortraitType } from "types";

export const UserPortraitsList = ({ users }: { users: UserInfoType[] | undefined }) => {

    const windowSize = useWindowSize();

    return (
        <List
            height={windowSize.width > 1000 ? 300 : 300} // height of window
            itemData={users}
            itemCount={users ? users.length : 0}
            itemSize={200} // width of item
            layout="horizontal"
            width={windowSize.width > 1000 ? 1000 : windowSize.width - 25} // width of window
        >
            {UserPortrait}
        </List>
    );
}

export default UserPortraitsList;
