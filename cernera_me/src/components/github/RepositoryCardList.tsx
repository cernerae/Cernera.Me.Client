import React from 'react';
import { Container, Card, Col, Row } from "react-bootstrap";
import { GitHubRepository } from "../../types/index";
import { RepositoryCard } from "./RepositoryCard";
import styles from './Github.module.scss';

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepository[] }) => {

    const cards = repositories
        ? (repositories.map((repo: GitHubRepository, index: number) => <Col md={6}><RepositoryCard repo={repo} /></Col>))
        : null;

    return (
        <div id="RepositoryCardList" className={styles["repository-card-list"]}>
            <Container>
                <Row>{cards}</Row>
            </Container>
        </div>
    );
}

export default RepositoryCardList;
