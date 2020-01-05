import React from 'react';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import PageContainer from "../pageContainer/PageContainer";
import style from './LandingPage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCode, faLaptop, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCode, faLaptop)


const SiteLinks: React.FC = () => {
    return (
        <div>
            <Navbar className={style["landing-page__content__header-links-group"]} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className={style["landing-page__content__header-link"]} href="#features">About Us</Nav.Link>
                    <Nav.Link className={style["landing-page__content__header-link"]} href="#features">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link className={style["landing-page__content__header-link"]} href="#deets">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
}

const Icons: React.FC = () => {
    return (
        <div className={style["landing-page__content__icon-group"]}>
            <FontAwesomeIcon icon={faCode} size='1x' className={style["landing-page__content__icon"]}/>
            <FontAwesomeIcon icon={faLaptop} size='1x' className={style["landing-page__content__icon"]}/>
            <FontAwesomeIcon icon={faWindowRestore} size='1x' className={style["landing-page__content__icon"]}/>
        </div>
    );
}

const PageHeader: React.FC = () => {
    return (
        <div>
            <h2 className={style["landing-page__content__title"]}>Who are you here to see?</h2>
        </div>
    );
}

const ProfileList: React.FC = () => {
    return (
        <div className={style["landing-page__content__profile-list"]}>
            <Button className={style["landing-page__content__profile-button"]}>Thomas</Button>
            <br></br>
            <Button className={style["landing-page__content__profile-button"]}>Edward</Button>
            <br></br>
            <Button className={style["landing-page__content__profile-button"]}>Gregory</Button>
            <br></br>
        </div>
    );
}


const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <div className={style["landing-page__content"]}>
                <Container>


                    <Row>
                         {/* This is the Sidebar column */}
                         {/*<Col style={{maxWidth: '260px'}}><Sidebar/></Col>*/}

                        <Col>

                            <SiteLinks/>

                            <PageHeader/>
                           
                            <ProfileList/>

                            
                            

                            

                            
                        
                        </Col>



                    </Row>


                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
