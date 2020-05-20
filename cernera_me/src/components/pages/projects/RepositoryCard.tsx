import React from 'react';
import { useWindowSize } from "lib/hooks";
import { Container, Card, Col, Row } from "react-bootstrap";
import github_logo from "assets/images/github_logo.png";
import { GitHubRepositoryType } from "types";
import styles from './Github.module.scss';

export const RepositoryCard = ({ data, index, style }: { data: GitHubRepositoryType[], index: any, style: any }) => {

    const windowSize = useWindowSize();

    const trimString = (s: string, cutAt: number, windowWidth: number): string => {
        if (s && windowWidth < 1000) {
            return s.length > cutAt ? `${s.substring(0, cutAt)}...` : s;
        } else {
            return s;
        }
    }

    return (
        <div style={style}>
            {data ?
                <Card key={`repo-card-${index}`} className={styles["repository-card"]}>
                    <a href={data[index].html_url} target="_blank" rel="noopener noreferrer">
                        <Card.Title>
                            <span>
                                <img className={styles["repository-card__github-logo"]} src={github_logo} alt={`GitHub Card for ${data[index].html_url}`} />
                            </span>
                            {trimString(data[index].name, 20, windowSize.width)}
                        </Card.Title>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col xs={12} className={styles["repository-card__description"]}>
                                        {trimString(data[index].description, 40, windowSize.width)}
                                    </Col>
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
