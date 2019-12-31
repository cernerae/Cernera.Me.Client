import React from 'react';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './LandingPage.module.scss';

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <Sidebar />
            <div className={style["landing-page__content"]}>
                <Container>
                    <Row>
                         {/* This is the Sidebar column */}
                         <Col style={{maxWidth: '260px'}}><Sidebar/></Col>

                        <Col>
                            <h1 className={style["landing-page__content__title"]}>Cernera.Me</h1>
                            <h2 className={style["landing-page__content__subtitle"]}> A personal website for clients to see our past projects and work experience</h2>
                            <h2 className={style["landing-page__content__subtitle"]}> Who are you here to see?</h2>

                            <div className={style["landing-page__content__btngroup"]}>
                                
                                    <Button className={style["landing-page__content__btn"]}>Thomas</Button>
                                    <Button className={style["landing-page__content__btn"]}>Edward</Button>
                                    <Button className={style["landing-page__content__btn"]}>Gregory</Button>
                            
                            </div>

                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
