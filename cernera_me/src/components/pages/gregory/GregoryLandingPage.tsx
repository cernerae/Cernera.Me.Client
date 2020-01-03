import React from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Sidebar from "../../sidebar/Sidebar";
import style from './GregoryLandingPage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faGraduationCap, faBriefcase, faWrench, faTrophy, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBookOpen, faGraduationCap, faBriefcase, faWrench, faTrophy, faPlus, faChevronDown)

const GregoryLandingPage: React.FC = () => {
    return (
        <div id="GregoryLandingPage" className={style["gregory-landing-page"]}>
            <div className={style["gregory-landing-page__content"]}>
                <Container fluid>
                    <Row  className="show-grid">

                        <Col style={{maxWidth: '260px'}}><Sidebar/></Col>

                        <Col>
                            
                            
                            <h1 className={style["gregory-landing-page__content__title"]}>
                                Hi, my name is 
                                <br></br>
                                <div style={{fontSize: '80px', color: '#89E077'}}>Gregory Cernera</div>
                            </h1>

                            <h1 className={style["gregory-landing-page__content__body-text"]}>I am a Software Engineer</h1>

                            

                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default GregoryLandingPage;
