import React from 'react';
import { Container, Card, Col, Row } from "react-bootstrap";
import github_logo from "assets/images/github_logo.png";
import { GitHubRepositoryType } from "types";
import styles from './Github.module.scss';

export const RepositoryCard = ({ data, index, style }: { data: GitHubRepositoryType[], index: any, style: any }) => {

    return (
        <div style={style}>
            {data ?
                <Card key={`repo-card-${index}`} className={styles["repository-card"]}>
                    <a href={data[index].html_url} target="_blank" rel="noopener noreferrer">
                        <Card.Title>{data[index].name}</Card.Title>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <img className={styles["repository-card__github-logo"]} src={github_logo} alt={`GitHub Card for ${data[index].html_url}`} />
                                    </Col>
                                    <Col xs={9} md={9} className={styles["repository-card__description"]}>{data[index].description}</Col>
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
