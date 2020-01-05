import React from 'react';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import style from './LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import Iframe from 'react-iframe'

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <Sidebar sm={true} />
            <div className={style["landing-page__content"]}>
                <Container className={style["landing-page__content__container"]}>
                    <Row className={style["landing-page__content__container__vertical-center"]} style={{ height: "100%", width: "100%" }}>
                        <Col md={4}>
                            <Iframe url={"http://localhost:3000/edward"} allowFullScreen={true} />
                        </Col>
                        <Col md={4}>
                            <Iframe url={"http://localhost:3000/gregory"} allowFullScreen={true} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
