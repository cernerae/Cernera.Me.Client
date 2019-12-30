import React from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
    return (
        <div id="AboutPage" className={style["about-page"]}>
            <div className={style["about-page__content"]}>
                <Container fluid>
                    <Row  className="show-grid">

                        <Col style={{maxWidth: '260px'}}><Sidebar/></Col>

                        <Col>
                            
                            <img className={style["about-page__content__profile-pic"]} src={require('../../images/greg_profile_pic.jpg')}/>
                            <h1 className={style["about-page__content__hello"]}>Hi! My name is Gregory Cernera</h1>
                            <h1 className={style["about-page__content__body-text"]}>Full stack developer / Data engineer / Student</h1>
                        
                            <Accordion className={style["about-page__content__accordion"]}>

                                <Card >
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="0">Summary</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="1">Education</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="2">Experience</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="3">Projects & Publications</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="4">Awards</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="5">Additional Activities</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                

                            </Accordion>

                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AboutPage;
