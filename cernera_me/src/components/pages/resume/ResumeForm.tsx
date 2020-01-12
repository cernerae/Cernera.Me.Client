import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import style from './ResumeForm.module.scss';


const ResumeForm: React.FC = () => {
    return (
        <div id="ResumePage" className={style["resume-page"]}>
            <div className={style["resume-page__content"]}>

                <h1 className={style["resume-page__content__header"]}>Experience</h1>

                <Jumbotron fluid className={style["resume-page__content__jumbotron"]}>
                    <Container className={style["resume-page__content__jumbotron__jumbo-container"]}>
                        <img src={require("../../../assets/images/ibm3.png")} className={style["resume-page__content__jumbotron__jumbo-container__company-logo-ibm"]}></img>
                        <h1 className={style["resume-page__content__jumbotron__jumbo-container__job-title"]}>IBM</h1>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>Back-End Software Developer Intern</p>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>May 2019 - Present</p>
                        <Button className={style["resume-page__content__jumbotron__jumbo-container__visit-button"]} href="https://ibm.com">Visit Site</Button>

                        { /*
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        */ }

                    </Container>
                </Jumbotron>

                <Jumbotron fluid className={style["resume-page__content__jumbotron"]}>
                    <Container className={style["resume-page__content__jumbotron__jumbo-container"]}>
                        <img src={require("../../../assets/images/avlino.png")} className={style["resume-page__content__jumbotron__jumbo-container__company-logo"]}></img>
                        <h1 className={style["resume-page__content__jumbotron__jumbo-container__job-title"]}>Avlino, Inc.</h1>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>Software Engineer Intern</p>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>May 2017 - August 2018</p>
                        <Button className={style["resume-page__content__jumbotron__jumbo-container__visit-button"]} href="https://avlino.com/">Visit Site</Button>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid className={style["resume-page__content__jumbotron"]}>
                    <Container className={style["resume-page__content__jumbotron__jumbo-container"]}>
                        <img src={require("../../../assets/images/healthy_palate.PNG")} className={style["resume-page__content__jumbotron__jumbo-container__company-logo"]}></img>
                        <h1 className={style["resume-page__content__jumbotron__jumbo-container__job-title"]}>The Healthy Palate</h1>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>IT Specialist</p>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>November 2015 - Feb 2016</p>
                        <Button className={style["resume-page__content__jumbotron__jumbo-container__visit-button"]} href="https://www.thehealthypalate.com/">Visit Site</Button>
                    </Container>
                </Jumbotron>

                <h1 className={style["resume-page__content__header"]}>Education</h1>

                <Jumbotron fluid className={style["resume-page__content__jumbotron"]}>
                    <Container className={style["resume-page__content__jumbotron__jumbo-container"]}>
                        <img src={require("../../../assets/images/marist.png")} className={style["resume-page__content__jumbotron__jumbo-container__marist-logo"]}></img>
                        <h1 className={style["resume-page__content__jumbotron__jumbo-container__job-title"]}>Marist College</h1>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>B.S. Computer Science</p>
                        <p className={style["resume-page__content__jumbotron__jumbo-container__job-text"]}>Class of 2020</p>
                        <Button className={style["resume-page__content__jumbotron__jumbo-container__visit-button"]} href="https://www.marist.edu">Visit Site</Button>
                    </Container>
                </Jumbotron>
               
            </div>
        </div>
    );
}

export default ResumeForm;
