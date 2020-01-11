import React from 'react';
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import UserCard from "components/user/UserCard";
import MainNav from "components/nav/MainNav";
import style from './LandingPage.module.scss';
import ed_profile_pic from "assets/images/ed_profile_pic.jpg";
import greg_profile_pic from "assets/images/greg_profile_pic.jpg";
import tom_profile_pic from "assets/images/tom_profile_pic.jpg";

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={style["landing-page"]}>
            <div className={style["landing-page__content"]}>
                <Container className={style["landing-page__content__container"]}>
                    <MainNav />
                    <Row className="h-100">
                        <Col md={12} className={style["landing-page__content__container__vertical-center"]}>
                            <CardDeck>
                                <UserCard keyName="edward" displayName="Edward Cernera" description="Software Engineer" image={ed_profile_pic} to="/edward" />
                                <UserCard keyName="gregory" displayName="Gregory Cernera" description="Software Engineer" image={greg_profile_pic} to="/gregory" />
                                <UserCard keyName="thomas" displayName="Thomas Cernera" description="IT Specialist" image={tom_profile_pic} to="/edward" />
                            </CardDeck>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
