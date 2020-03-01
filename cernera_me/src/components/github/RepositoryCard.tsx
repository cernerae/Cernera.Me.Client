import React from 'react';
import { Container, Card, Col, Row } from "react-bootstrap";
import github_logo from "assets/images/github_logo.png";
import { GitHubRepository } from "types";
import styles from './Github.module.scss';

export const RepositoryCard = ({ data, index, style }: { data: GitHubRepository[], index: any, style: any }) => {

    return (
        <div style={style}>
            {data ?
                <Card key={`repo-card-${index}`} className={[styles["repository-card"], "shadow-sm"].join(' ')}>
                    <a href={data[index].html_url} target="_blank">
                        <Card.Title>{data[index].name}</Card.Title>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col md={9} className={styles["repository-card__description"]}>{data[index].description}</Col>
                                    <Col md={3}><img className={styles["repository-card__github-logo"]} src={github_logo} /></Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </a>
                </Card>
                : null
            }
        </div>
    );
}

export default RepositoryCard;
