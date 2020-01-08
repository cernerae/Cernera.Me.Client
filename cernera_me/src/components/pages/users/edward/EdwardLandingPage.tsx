import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import style from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";

const EdwardLandingPage: React.FC = () => {

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
    }, []);

    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <Sidebar sm={true} />
            <div className={style["landing-page__content"]}>
                <Container className={style["landing-page__content__container"]}>
                    <Row className={style["landing-page__content__container__vertical-center"]} style={{ height: "100%", width: "100%" }}>
                        <Col md={6} className={style["landing-page__content__container__vertical-center"]}>
                            <MainTextBlock title={"Edward Cernera"} text={"I like to build things"} />
                        </Col>
                        <Col md={6}>
                            { /* <RepositoryCardList repositories={store.gitHub.repositories} /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default EdwardLandingPage;
