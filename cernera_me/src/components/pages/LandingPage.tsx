import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './LandingPage.module.scss';

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <Sidebar />
            <div className={style["landing-page__content"]}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <p>Column 1</p>
                        </Col>
                        <Col md={4}>
                            <p>Column 2</p>
                        </Col>
                        <Col md={4}>
                            <p>Column 3</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
