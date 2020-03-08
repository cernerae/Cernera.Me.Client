import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import UserCard from "components/user/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "./RepositoryCardList";
import { findUser } from "info/userInfo";
import { UserInfoType } from "types";

const ProjectsPage = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const store: any = useSelector(state => state);
    const history = useHistory();
    const dispatch = useDispatch();

    const user: UserInfoType | undefined = findUser(allUsers, username);

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        user?.socialMedia.github && dispatch(getGitHubRepositoriesAction(user.socialMedia.github));
    }, []);

    const textBody = `
        My current interests include building, configuring and deploying web services.
        `

    return (
        <>
            {user ?
                <div id="ProjectsPage" className={styles["landing-page"]}>
                    <Sidebar sm={true} slideIn={false} user={user} />
                    <div className={styles["landing-page__content"]} style={{ paddingLeft: "30px" }}>
                        <Container className={styles["landing-page__content__container"]}>
                            <Row className={styles["landing-page__content__container__content"]}>
                                <Col md={6} className={genStyle["vertical-center"]}>
                                    <Row>
                                        <Col className={genStyle["horizontal-center"]}>
                                            <UserCard user={user} />
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
                : history.goBack()}
        </>
    );
}

export default ProjectsPage;
