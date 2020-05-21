import React from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import UserPortrait from "./UserPortrait";
import { UserInfoType } from "types";

export const UserPortraitsList = ({ users }: { users: UserInfoType[] | undefined }) => {

    const windowSize = useWindowSize();

    const getListWidth = (windowWidth: number) => {
        if (windowWidth > 1000) {
            return 900;
        } else if (windowWidth > 600) {
            return 500;
        } else {
            return 500;
        }
    }

    const getItemWidth = (windowWidth: number) => {
        if (windowWidth > 1000) {
            return 300;
        } else if (windowWidth > 600) {
            return 166;
        } else if (windowWidth > 450) {
            return 150;
        } else {
            return 105;
        }
    }

    return (
        <List
            style={{ marginLeft: "auto", marginRight: "auto" }}
            height={windowSize.width > 1000 ? 300 : 300} // height of window
            itemData={users}
            itemCount={users ? users.length : 0}
            itemSize={getItemWidth(windowSize.width)} // width of item
            layout="horizontal"
            width={getListWidth(windowSize.width)} // width of window
        >
            {UserPortrait}
        </List>
    );
}

export default UserPortraitsList;
