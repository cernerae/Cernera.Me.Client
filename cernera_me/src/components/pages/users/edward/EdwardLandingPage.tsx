import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";

const EdwardLandingPage: React.FC = () => {

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    const textBody = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.
        `

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
    }, []);

    return (
        <div id="EdwardLandingPage" className={styles["landing-page"]}>
            <Sidebar sm={true} slideIn={true} />
            <div className={styles["landing-page__content"]}>
                <Container className={styles["landing-page__content__container"]}>
                    <Row className="h-100">
                        <Col md={6} className={styles["landing-page__content__container__vertical-center"]}>
                            <MainTextBlock title={"edward cernera"} text={textBody} fadeIn={true} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default EdwardLandingPage;
