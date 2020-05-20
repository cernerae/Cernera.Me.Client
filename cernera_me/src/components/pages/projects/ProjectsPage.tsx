import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "lib/hooks";
import log from "loglevel";
import UserCard from "components/user/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import landingStyles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";
import styles from "./ProjectsPage.module.scss";
import { getGitHubRepositoriesAction } from "store/actionCreators";
import { getGitHubRepositoriesReducerResponse } from "store/selectors";
import { GitHubRepositoryType } from "types";
import { RepositoryCardList } from "./RepositoryCardList";
import { findUser } from "info/userInfo";
import { UserInfoType } from "types";

const ProjectsPage = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const history = useHistory();
    const windowSize = useWindowSize();
    const dispatch = useDispatch();

    const user: UserInfoType | undefined = findUser(allUsers, username);

    const repositoriesData: GitHubRepositoryType[] = useSelector(state =>
        getGitHubRepositoriesReducerResponse(state)
    );

    useEffect(() => {
        log.info("Getting GitHub Repositories on load...")
        if (user && user.socialMedia.github !== undefined) {
            log.info("User: %o", user);
            log.info("GitHub Username: " + user.socialMedia.github);
            dispatch(getGitHubRepositoriesAction({ username: user.socialMedia.github }));
        }
    }, [dispatch, user]);

    return (
        <>
            {user ?
                <div id="ProjectsPage" className={landingStyles["landing-page"]}>
                    <Sidebar sm={true} slideIn={false} user={user} />
                    <div className={landingStyles["landing-page__content"]} style={{ paddingLeft: "30px" }}>
                        <Container className={landingStyles["landing-page__content__container"]}>
                            <Row className={landingStyles["landing-page__content__container__content"]}>
                                <Col md={6} className={genStyle["vertical-center"]}>
                                    <Row>
                                        <Col className={genStyle["horizontal-center"]}>
                                            <UserCard user={user} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{ paddingLeft: windowSize.width < 1350 ? "5vw" : "0" }}>
                                            <MainTextBlock text={user.projectsText ? user.projectsText : ""} fadeIn={true} />
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={6} className={[styles["projects-col"], genStyle["vertical-center"]].join(' ')}>
                                    <RepositoryCardList repositories={repositoriesData} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                : history.goBack()}
        </>
    );
}

export default ProjectsPage;
