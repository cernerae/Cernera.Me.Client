import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import styles from './ProjectsPage.module.scss';
import landingStyles from 'components/pages/LandingPage.module.scss';

import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";

const ProjectsPage: React.FC = () => {

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
    }, []);

    const textBody = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.
        `

    return (
        <div id="ProjectsPage" className={styles["projects-page"]}>
            <Sidebar sm={true} />
            <div className={styles["projects-page__content"]}>
                <Container>
                    <Row>
                        <Col md={6} className={landingStyles["landing-page__content__container__vertical-center"]}>
                            <MainTextBlock title={"edward cernera"} text={textBody} fadeIn={true} />
                        </Col>
                        <Col md={6}>
                            <RepositoryCardList repositories={store.gitHub.repositories} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProjectsPage;
