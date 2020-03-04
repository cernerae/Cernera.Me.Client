import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserCard from "components/user/UserCard";
import tom_profile_pic from "assets/images/tom_profile_pic.jpg";
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";
import MainTextBlock from "components/text/MainTextBlock";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";

import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";

const ProjectsPageThomas = ({ user, social }: { user: string, social: SocialMediaUsernames }) => {

    const textBody = `
        TODO: Tom's projects page. Alternative to GitHub feature?? -->
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
                                    <UserCard keyName="thomas" displayName="Thomas Cernera" description="IT Specialist" image={tom_profile_pic} to="/robert" />
                                </Col>
                            </Row>
                            <Row>
                                <MainTextBlock text={textBody} fadeIn={true} />
                            </Row>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProjectsPageThomas;
