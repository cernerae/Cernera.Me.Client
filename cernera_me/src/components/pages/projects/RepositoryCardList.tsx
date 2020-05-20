import React from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import { GitHubRepositoryType } from "types";
import { RepositoryCard } from "./RepositoryCard";

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepositoryType[] | undefined }) => {

    const windowSize = useWindowSize();

    const getItemHeight = (width: number): number => {
        if (width > 1000) {
            return 175;
        } else if (width > 768) {
            return 175;
        } else {
            return 175;
        }
    }

    const getWindowHeight =
        (
            numItems: number,
            windowWidth: number
        ) => {
            const itemHeight = getItemHeight(windowWidth);
            const totalNoScrollHeight = numItems * itemHeight;
            if (windowWidth > 768) {
                return 500;
            } else {
                return totalNoScrollHeight;
            }
        }

    return (
        <List
            height={getWindowHeight
                (repositories ? repositories.length : 0, windowSize.width)
            } // height of window
            itemData={repositories}
            itemCount={repositories ? repositories.length : 0}
            itemSize={getItemHeight(windowSize.width)} // height of each row
            width={"100%"} // width of window
        >
            {RepositoryCard}
        </List>
    );
}

export default RepositoryCardList;
