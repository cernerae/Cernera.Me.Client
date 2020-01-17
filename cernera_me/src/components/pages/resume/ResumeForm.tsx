import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import style from './ResumeForm.module.scss';


const ResumeForm: React.FC = () => {
    return (
        <div id="ResumePage" className={style["resume-page"]}>
            <div className={style["resume-page__content"]}>

                <h1 className={style["resume-page__content__header"]}>Experience</h1>

                <Container className={style["resume-page__content__container"]}>
                    <Row>
                        <Col sm={5} className={style["resume-page__content__col-left"]}>
                            <img src={require('../../../assets/images/ibm3.png')} className={style["resume-page__content__logo"]}></img>
                        </Col>

                        <Col sm className={style["resume-page__content__col-right"]}>
                            <div>
                                <strong>IBM</strong> <br></br>
                                Back-End Software Developer Intern <br></br>
                                May 2019 - Present
                                <br></br>
                                <br></br>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className={style["resume-page__content__container"]}>
                    <Row>
                        <Col sm={5} className={style["resume-page__content__col-left"]}>
                            <img src={require('../../../assets/images/avlino.png')} className={style["resume-page__content__logo2"]}></img>
                        </Col>

                        <Col sm className={style["resume-page__content__col-right"]}>
                            <div>
                                <strong>Avlino, Inc.</strong> <br></br>
                                Software Engineer Intern <br></br>
                                May 2017 - August 2018
                                <br></br>
                                <br></br>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className={style["resume-page__content__container"]}>
                    <Row>
                        <Col sm={5} className={style["resume-page__content__col-left"]}>
                            <img src={require('../../../assets/images/healthy_palate.PNG')} className={style["resume-page__content__logo2"]}></img>
                        </Col>

                        <Col sm className={style["resume-page__content__col-right"]}>
                            <div>
                                <strong>The Healthy Palate</strong> <br></br>
                                IT Specialist <br></br>
                                IDK when
                                <br></br>
                                <br></br>
                            </div>
                        </Col>
                    </Row>
                </Container>


                


                
               
            </div>
        </div>
    );
}

export default ResumeForm;
