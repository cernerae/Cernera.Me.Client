import React from 'react';
import { useWindowSize } from "lib/hooks";
import { Container, Row, Col } from "react-bootstrap";
import genStyle from "components/General.module.scss";
import UserPortraitsList from "components/user/UserPortraitsList";
import UserPortrait from "components/user/UserPortrait";
import UserCard from "components/user/UserCard";
import MainNav from "components/nav/MainNav";
import style from './LandingPage.module.scss';
import { UserInfoType } from 'types';

const LandingPage = ({ users }: { users: UserInfoType[] }) => {

    const windowSize = useWindowSize();

    const portraitData: JSX.Element[] | undefined = users && users.map(function (user: any, index: any) {
        return (
            <div>
                <Col xs={6} md={4} className={style['landing-page-portrait-column']}>
                    <UserCard user={user} useFirstNameOnly={true} hideTitle={true}/>
                </Col>
            </div>
        );
    });

    return (
        <div id="LandingPage" className={[style["landing-page"], style["main-landing-page"]].join(' ')}>
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
                        <p>{windowSize.width > 600 ? "Click" : "Tap"} a portrait to learn more, or visit our <a href="https://blog.cernera.me/"><u>blog</u></a> </p>
                    </Row>
                    <Row className={style["main-landing-page__user-portraits"]}>
                        {portraitData}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
