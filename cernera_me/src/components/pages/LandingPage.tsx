import React from 'react';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/FullSidebar";
import PageContainer from "../pageContainer/PageContainer";
import style from './LandingPage.module.scss';
import tom_profile_pic from "assets/images/tom_profile_pic.jpg";
import ed_profile_pic from "assets/images/ed_profile_pic.jpg";
import greg_profile_pic from "assets/images/greg_profile_pic.jpg";

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <Sidebar />
            <div className={style["landing-page__content"]}>
                <Container>
                    <Row>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
