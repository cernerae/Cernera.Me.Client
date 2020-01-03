import React from 'react';
import { Container, Card, Col, Row } from "react-bootstrap";
import github_logo from "../../assets/images/github_logo.png";
import { GitHubRepository } from "../../types";
import styles from './Github.module.scss';

export const RepositoryCard = ({ repo }: { repo: GitHubRepository }) => {

    return (
        <Card className={[styles["repository-card"], "shadow-sm"].join(' ')}>
            <a href={repo.html_url} target="_blank">
                <Card.Title>{repo.name}</Card.Title>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col md={9}>{repo.description}</Col>
                            <Col md={3}><img className={styles["repository-card__github-logo"]} src={github_logo} /></Col>
                        </Row>
                    </Container>
                </Card.Body>
            </a>
        </Card>
    );
}

export default RepositoryCard;
