import React from 'react';
import { Container, Card } from "react-bootstrap";
import { GitHubRepository } from "../../types/index";
import { RepositoryCard } from "./RepositoryCard";
import styles from './Github.module.scss';

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepository[] }) => {

    const cards = repositories
        ? (repositories.map((repo: GitHubRepository) => <RepositoryCard repo={repo} />))
        : null;

    return (
        <div id="RepositoryCardList" className={styles["repository-card-list"]}>
            <Container>{cards}</Container>
        </div>
    );
}

export default RepositoryCardList;
