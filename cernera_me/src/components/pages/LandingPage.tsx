import React from 'react';
import { useWindowSize } from "lib/hooks";
import { Container, Row, Col } from "react-bootstrap";
import genStyle from "components/General.module.scss";
import UserPortraitsList from "components/user/UserPortraitsList";
import MainNav from "components/nav/MainNav";
import style from './LandingPage.module.scss';
import { UserInfoType } from 'types';

const LandingPage = ({ users }: { users: UserInfoType[] }) => {

    const windowSize = useWindowSize();

    return (
        <div id="LandingPage" className={[style["landing-page"], style["main-landing-page"]].join(' ')}>
            <div className={style["banner"]} />
            <div className={style["landing-page__content"]}>
                <Container className={style["landing-page__content__container"]}>
                    <MainNav />
                    <Row className={style["main-landing-page__header"]}>
                        <Col md={12} className={[genStyle["vertical-center-100"], genStyle["horizontal-center"]].join(' ')}>
                            <div className={style["landing-page__content__container__brand"]}>cernera.me</div>
                            <div className={style["landing-page__content__container__brand__sub-title"]}>Developer Portfolio Website</div>
                        </Col>
                    </Row>
                    <Row className={style["main-landing-page__user-portraits-info"]}>
                        <p>{windowSize.width > 600 ? "Click" : "Tap"} a portrait to learn more</p>
                    </Row>
                    <Row className={style["main-landing-page__user-portraits"]}>
                        <Col md={12} className={genStyle["horizontal-center"]}>
                            <UserPortraitsList users={users} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
