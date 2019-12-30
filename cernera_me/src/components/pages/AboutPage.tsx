import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
    return (
        <div id="AboutPage" className={style["about-page"]}>
            <div className={style["about-page__content"]}>
                <Container fluid>
                    <Row  className="show-grid">
                        <Col style={{maxWidth: '260px'}}>
                            <Sidebar/>
                        </Col>
                        <Col style={{backgroundColor: 'lightpink'}}>
                            <p>Column 1</p>
                            <img className={style["about-page__content__profile-pic"]} src={require('../../images/greg_profile_pic.jpg')}/>
                            <h1 style={{textAlign: 'center'}}>Hi! My name is Gregory Cernera</h1>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AboutPage;
