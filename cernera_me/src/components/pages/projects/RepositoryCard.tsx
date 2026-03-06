import React from "react";
import { useWindowSize } from "lib/hooks";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHubRepositoryType } from "types";
import styles from "./Github.module.scss";

export const RepositoryCard = ({
  data,
  index,
  style,
}: {
  data: GitHubRepositoryType[];
  index: any;
  style: any;
}) => {
  const windowSize = useWindowSize();

  const trimString = (
    s: string,
    cutAt: number,
    windowWidth: number
  ): string => {
    if (s && windowWidth < 1000) {
      return s.length > cutAt ? `${s.substring(0, cutAt)}...` : s;
    } else {
      return s;
    }
  };

  const repository: GitHubRepositoryType = data[index];

  return (
    <div style={style}>
      {data ? (
        <div key={`repo-card-${index}`} className={styles["repository-card"]}>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles["repository-card__card-title"]}>
              <FontAwesomeIcon icon={["fab", "github"]} />
              <span className={styles["repository-card__card-title__text"]}>{trimString(repository.name, 20, windowSize.width)}</span>
            </div>
            <div className={styles["repository-card__card-body"]}>
              <Container>
                <Row>
                  <Col xs={12} className={styles["repository-card__description"]}>
                    {trimString(repository.description, 40, windowSize.width)}
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className={styles["repository-card__card-body__meta"]}>
                    <span>
                      <FontAwesomeIcon icon={["fas", "star"]} />{" "}
                      {repository.stargazers_count}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={["fas", "eye"]} />{" "}
                      {repository.watchers_count}
                    </span>
                  </Col>
                </Row>
              </Container>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default RepositoryCard;
