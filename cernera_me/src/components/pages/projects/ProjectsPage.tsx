import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";

import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";

const ProjectsPage = ({ user, social }: { user: string, social: SocialMediaUsernames }) => {

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
    }, []);

    const textBody = `
        My current interests include building, configuring and deploying web services.
        `

    return (
        <div id="ProjectsPage" className={styles["landing-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <div className={styles["landing-page__content"]}>
                <Container className={styles["landing-page__content__container"]}>
                    <Row className="h-100">
                        <Col md={6} className={genStyle["vertical-center"]}>
                            <MainTextBlock title={"edward cernera"} text={textBody} fadeIn={true} />
                        </Col>
                        <Col md={6} className={genStyle["vertical-center"]}>
                            <RepositoryCardList repositories={store.gitHub.repositories} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProjectsPage;
