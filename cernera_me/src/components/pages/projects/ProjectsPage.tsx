import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import UserCard from "components/user/UserCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";
import ed_profile_pic from "assets/images/ed_profile_pic.png";
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
                    <Row className={styles["landing-page__content__container__content"]}>
                        <Col md={6} className={genStyle["vertical-center"]}>
                            <Row>
                                <Col className={genStyle["horizontal-center"]}>
                                    <UserCard keyName="edward" displayName="Edward Cernera" description="Software Engineer" image={ed_profile_pic} to="/edward" />
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

export default ProjectsPage;
