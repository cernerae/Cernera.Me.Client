import React, { useState } from 'react';
import { useWindowSize } from "lib/hooks";
import { FixedSizeList as List } from "react-window";
import { GitHubRepositoryType } from "types";
import { RepositoryCard } from "./RepositoryCard";
import styles from "./Github.module.scss";

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepositoryType[] | undefined }) => {

    const windowSize = useWindowSize();
    const [atTop, setAtTop] = useState(true);
    const [atBottom, setAtBottom] = useState(false);

    const itemHeight = 175;

    const getWindowHeight = (numItems: number, windowWidth: number) => {
        if (windowWidth > 768) return 500;
        return numItems * itemHeight;
    };

    const listHeight = getWindowHeight(repositories ? repositories.length : 0, windowSize.width);
    const totalHeight = (repositories ? repositories.length : 0) * itemHeight;

    const handleScroll = ({ scrollOffset }: { scrollOffset: number }) => {
        setAtTop(scrollOffset === 0);
        setAtBottom(scrollOffset >= totalHeight - listHeight - 1);
    };

    return (
        <div className={styles["repository-card-list-wrapper"]}>
            {!atTop && <div className={styles["repository-card-list-fade--top"]} />}
            <List
                className={styles["repository-card-list"]}
                height={listHeight}
                itemData={repositories}
                itemCount={repositories ? repositories.length : 0}
                itemSize={itemHeight}
                width={"100%"}
                onScroll={handleScroll}
            >
                {RepositoryCard}
            </List>
            {!atBottom && <div className={styles["repository-card-list-fade--bottom"]} />}
        </div>
    );
}

export default RepositoryCardList;
