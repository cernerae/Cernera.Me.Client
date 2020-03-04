import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserCard from "components/user/UserCard";
import bob_profile_pic from "assets/images/bob_profile_pic.jpeg";
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";

import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";

const ProjectsPageRobert = ({ user, social }: { user: string, social: SocialMediaUsernames }) => {

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("OptionAlphaRob"));
    }, []);

    const textBody = `
        TODO: Bob's GitHub will go here if he wants -->
        `

    return (
        <div id="ProjectsPage" className={styles["landing-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <div className={styles["landing-page__content"]}>
                <Container className={styles["landing-page__content__container"]}>
                    <Row className={styles["landing-page__content__container__content"]}>
                        <Col md={6} className={genStyle["vertical-center"]}>
                            <Row>
                                <Col className={genStyle["horizontal-center"]}>
                                    <UserCard keyName="robert" displayName="Robert Cernera" description="Software Engineer" image={bob_profile_pic} to="/robert" />
                                </Col>
                            </Row>
                            <Row>
                                <MainTextBlock text={textBody} fadeIn={true} />
                            </Row>
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

export default ProjectsPageRobert;
