import React from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import { GitHubRepositoryType } from "types";
import { RepositoryCard } from "./RepositoryCard";

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepositoryType[] | undefined }) => {

    const windowSize = useWindowSize();

    return (
        <List
            height={500} // height of window
            itemData={repositories}
            itemCount={repositories ? repositories.length : 0}
            itemSize={windowSize.width > 1000 ? 225 : 300} // height of each row
            width={"100%"} // width of window
        >
            {RepositoryCard}
        </List>
    );
}

export default RepositoryCardList;
