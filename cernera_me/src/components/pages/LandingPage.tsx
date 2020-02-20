import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import genStyle from "components/General.module.scss";
import buttonStyle from "components/Buttons.module.scss";
import SocialMediaIcons from "components/user/SocialMediaIcons";
import UserCard from "components/user/UserCard";
import MainNav from "components/nav/MainNav";
import style from './LandingPage.module.scss';
import ed_profile_pic from "assets/images/ed_profile_pic.jpg";
import greg_profile_pic from "assets/images/greg_profile_pic.jpg";
import tom_profile_pic from "assets/images/tom_profile_pic.jpg";
import { socialUsernames, socialUsernamesGregory, socialUsernamesThomas } from "info/userInfo";

const LandingPage: React.FC = () => {
    return (
        <div id="LandingPage" className={[style["landing-page"], style["main-landing-page"]].join(' ')}>
            <div className={style["landing-page__content"]}>
                <Container className={style["landing-page__content__container"]}>
                    <MainNav />
                    <Row>
                        <Col md={12} className={[genStyle["vertical-center-100"], genStyle["horizontal-center"]].join(' ')}>
                            <div className={style["landing-page__content__container__brand"]}>cernera.me</div>
                            <div className={style["landing-page__content__container__brand__sub-title"]}>A Portfolio Website</div>
                        </Col>
                    </Row>
                    <Row className={style["main-landing-page__user-portraits"]}>
                        <Col xs={4} md={4} className={genStyle["horizontal-center"]}>
                            <Link to="/gregory">
                                <UserCard keyName="gregory" displayName="Gregory" description="Software Engineer" image={greg_profile_pic} to="/gregory" />
                            </Link>
                            <SocialMediaIcons social={socialUsernamesGregory} />
                            <Button href={`/gregory`} className={buttonStyle["button_slide_right"]}>Visit Site</Button>
                        </Col>
                        <Col xs={4} md={4} className={genStyle["horizontal-center"]}>
                            <Link to="/edward">
                                <UserCard keyName="edward" displayName="Edward" description="Software Engineer" image={ed_profile_pic} to="/edward" />
                            </Link>
                            <SocialMediaIcons social={socialUsernames} />
                            <Button href={`/edward`} className={buttonStyle["button_slide_right"]}>Visit Site</Button>
                        </Col>
                        <Col xs={4} md={4} className={genStyle["horizontal-center"]}>
                            <Link to="/thomas">
                                <UserCard keyName="thomas" displayName="Thomas" description="IT Specialist" image={tom_profile_pic} to="/edward" />
                            </Link>
                            <SocialMediaIcons social={socialUsernamesThomas} />
                            <Button href={`/thomas`} className={buttonStyle["button_slide_right"]}>Visit Site</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
