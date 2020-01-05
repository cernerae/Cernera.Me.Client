import React from 'react';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import style from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";

const EdwardLandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <Sidebar sm={true} />
            <div className={style["landing-page__content"]}>
                <Container className={style["landing-page__content__container"]}>
                    <Row className={style["landing-page__content__container__vertical-center"]} style={{ height: "100%", width: "100%" }}>
                        <Col md={12}><MainTextBlock title={"Edward Cernera"} text={"I like to build things"} /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default EdwardLandingPage;
