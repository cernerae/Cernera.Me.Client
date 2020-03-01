import React from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import { GitHubRepository } from "types/index";
import { RepositoryCard } from "./RepositoryCard";
import styles from './Github.module.scss';

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepository[] | undefined }) => {

    const windowSize = useWindowSize();

    return (
        <List
            className={styles["yardsight__dashboard__node-list"]}
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
