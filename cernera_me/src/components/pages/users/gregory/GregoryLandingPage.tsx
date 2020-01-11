import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import ContactForm from "components/pages/contact/ContactForm"
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";
import generalStyles from "components/General.module.scss";

const GregoryLandingPage: React.FC = () => {

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();
    const [showText, setShowText] = useState("hide-me");
    const [showSidebar, setShowSidebar] = useState("hide-left");

    const textBody = `
        I am a Software Engineer
        `

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
        setTimeout(() => setShowText("show-me"), 500);
        setTimeout(() => setShowSidebar("slide-right"), 250);
    }, []);

    return (
        <div id="GregoryLandingPage" className={styles["landing-page"]}>
            <Sidebar className={generalStyles[`${showSidebar}`]} sm={true} />
            <div className={styles["landing-page__content-greg"]}>
                <Container className={styles["landing-page__content-greg__container"]}>
                    <Row className="h-100">
                        <Col md={6} className={styles["landing-page__content-greg__container__vertical-center"]}>
                            <MainTextBlock className={generalStyles[`${showText}`]} title={"Gregory Cernera"} text={textBody} />
                        </Col>
                        <Col md={6} className={styles["landing-page__content-greg__container__vertical-center"]}>
                            { /* <RepositoryCardList repositories={store.gitHub.repositories} /> */}
                        </Col>
                        <Col md={{ span: 7, offset: 3 }} className={styles["landing-page__content-greg__container__vertical-center"]}>
                            {/* <ContactForm/> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default GregoryLandingPage;
