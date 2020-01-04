import React from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Sidebar from "../../sidebar/FullSidebar";
import style from './ResumePage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCode)

const ResumePage: React.FC = () => {
    return (
        <div id="ResumePage" className={style["resume-page"]}>
            <div className={style["resume-page__content"]}>
                <Container fluid>

                    <Row className="show-grid">

                        <Col style={{ maxWidth: '260px' }}><Sidebar /></Col>

                        <Col>

                            <h1 className={style["resume-page__content__header"]}>Experience</h1>
                            <br></br>


                            <div className={style["card"]}>
                                <div className={style["container"]}>
                                    <h1 className={style["primary"]}>IBM</h1>
                                    <h2 className={style["secondary"]}>Back-End Software Developer Intern</h2>
                                    <p>Part of the Java Z Security and DevOps team</p>
                                </div>
                            </div>

                            <br></br>

                            <div className={style["card"]}>
                                <div className={style["container"]}>
                                    <h1 className={style["primary"]}>Avlino, Inc.</h1>
                                    <h2 className={style["secondary"]}>Software Engineer Intern</h2>
                                    <p>Did some machine learning stuff</p>
                                </div>
                            </div>

                            <br></br>

                            <div className={style["card"]}>
                                <div className={style["container"]}>
                                    <h1 className={style["primary"]}>The Healthy Palate</h1>
                                    <h2 className={style["secondary"]}>IT Consultant</h2>
                                    <p>Did some IT stuff</p>
                                </div>
                            </div>

                            <h1 className={style["resume-page__content__header"]}>Education</h1>
                            <br></br>

                            <div className={style["card"]}>
                                <div className={style["container"]}>
                                    <h1 className={style["primary"]}>Marist College - Class of 2020</h1>
                                    <h2 className={style["secondary"]}>B.S. Computer Science</h2>
                                    <p>3.83 / 4.0</p>
                                </div>
                            </div>


                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ResumePage;
