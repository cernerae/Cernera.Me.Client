import React from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import style from './AboutPage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCode)

const AboutPage: React.FC = () => {
    return (
        <div id="AboutPage" className={style["about-page"]}>
            <div className={style["about-page__content"]}>
                <Container fluid>
                    <Row className="show-grid">

                        <Col style={{ maxWidth: '260px' }}>
                            <Sidebar sm={true} />
                        </Col>

                        <Col>

                            <h1 className={style["about-page__content__title"]}>About Me</h1>
                            <br></br>

                            <h2 className={style["about-page__content__body-text"]}>
                                I am currently a Back-End Software Developer Intern for IBM in Poughkeepsie, New York.

                                <br></br>
                                <br></br>

                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

                                <br></br>
                                <br></br>

                                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est
                            </h2>



                        </Col>


                        <Col>



                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AboutPage;
