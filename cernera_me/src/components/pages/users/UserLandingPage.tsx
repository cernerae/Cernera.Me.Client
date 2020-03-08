import React from 'react';
import { useHistory } from "react-router-dom";
import UserCard from "components/user/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";
import MainTextBlock from "components/text/MainTextBlock";
import ImageCollage from "components/user/ImageCollage";
import { findUser } from "info/userInfo";
import { UserInfoType } from 'types';

const UserLandingPage = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const history = useHistory();
    const user: UserInfoType | undefined = findUser(allUsers, username);

    return (
        <>
            {user ?
                <div id="UserLandingPage" className={[styles["landing-page"], styles["user-landing-page"]].join(' ')}>
                    <Sidebar sm={true} slideIn={true} user={user} />
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
                                        <MainTextBlock text={user.introText} fadeIn={true} />
                                    </Row>
                                </Col>
                                <Col md={6} className={[genStyle["vertical-center"], "w-100"].join(' ')}>
                                    <div className={[genStyle["horizontal-center"], "w-100"].join(' ')}>
                                        <Row>
                                            <ImageCollage imageArray={user.techLogos} />
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                : history.goBack()}
        </>
    );
}

export default UserLandingPage;
