import React from 'react';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './LandingPage.module.scss';
import laptop from '../../images/laptop.jpg';

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <div className={style["landing-page__content"]}>
                <Container>
                    <Row>
                         {/* This is the Sidebar column */}
                         {/*<Col style={{maxWidth: '260px'}}><Sidebar/></Col>*/}

                        <Col>
                            {/*}
                            <h1 className={style["landing-page__content__title"]}>Cernera.Me</h1>
                            <h2 className={style["landing-page__content__subtitle"]}>A portfolio for clients to see our services and past projects</h2>
                            */}

                            <h2 className={style["landing-page__content__title"]}>Who are you here to see?</h2>
                           

                            <div className={style["landing-page__content__btngroup"]}>
                                <Button className={style["landing-page__content__btn"]} href="/about">
                                    <img className={style["landing-page__content__btn-picture"]} src={require('../../images/tom_profile_pic.jpg')}/>
                                    Thomas
                                </Button>

                                <Button className={style["landing-page__content__btn"]} href="/about">
                                    <img className={style["landing-page__content__btn-picture"]} src={require('../../images/ed_profile_pic.jpg')}/>
                                    <div className={style["landing-page__content__btn-text"]}>Edward</div>
                                </Button>

                                <Button className={style["landing-page__content__btn"]} href="/about">
                                    <img className={style["landing-page__content__btn-picture"]} src={require('../../images/greg_profile_pic.jpg')}/>
                                    <div className={style["landing-page__content__btn-text"]}>Gregory</div>
                                </Button>

                            </div>

                            

                            
                        
                        </Col>



                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
