import React from 'react';
import { Container, Card } from "react-bootstrap";
import { GitHubRepository } from "../../types";
import styles from './Github.module.scss';

export const RepositoryCard = ({ repo }: { repo: GitHubRepository }) => {

    return (
        <Card className={styles["repository-card"]}>
            <Card.Title><a href={repo.html_url} target="_blank">{repo.name}</a></Card.Title>
            <Card.Body>{repo.description}</Card.Body>
        </Card>
    );
}

export default RepositoryCard;
