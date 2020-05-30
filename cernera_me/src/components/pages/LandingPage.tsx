import React from "react";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "lib/hooks";
import { Container, Row, Col } from "react-bootstrap";
import genStyle from "components/General.module.scss";
import UserCard from "components/user/UserCard";
import MainNav from "components/nav/MainNav";
import style from "./LandingPage.module.scss";
import pageStyle from "./Page.module.scss";
import btnStyles from "components/button/Button.module.scss";
import { UserInfoType } from "types";
import * as routes from "routes";

const LandingPage = ({ users }: { users: UserInfoType[] }) => {
  const history = useHistory();
  const windowSize = useWindowSize();

  const portraitData: JSX.Element[] | undefined =
    users &&
    users.map(function (user: any, index: any) {
      return (
        <div>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={3}
            className={style["landing-page-portrait-column"]}
          >
            <UserCard user={user} useFirstNameOnly={true} hideTitle={true} />
          </Col>
        </div>
      );
    });

  return (
    <div id="LandingPage" className={pageStyle["page"]}>
      <div className={pageStyle["page__content"]}>
        <Container className={pageStyle["page__content__container"]}>
          <MainNav />
          <Row className={style["main-landing-page__header"]}>
            <Col
              md={12}
              className={[
                genStyle["vertical-center-100"],
                genStyle["horizontal-center"],
              ].join(" ")}
            >
              <div className={style["main-landing-page__brand"]}>
                cernera.me
              </div>
              <div className={style["main-landing-page__brand__sub-title"]}>
                Portfolio Website
              </div>
            </Col>
          </Row>
          <Row className={style["main-landing-page__user-portraits"]}>
            {portraitData}
          </Row>
          <Row className={style["main-landing-page__user-portraits-info"]}>
            {windowSize.width > 1000 ? (
              <p>Click a portrait to learn more</p>
            ) : (
              <p>
                Tap a portrait to learn more or visit our{" "}
                <a href={routes.ROUTE_BLOG}>
                  <u>blog</u>
                </a>{" "}
              </p>
            )}
          </Row>
          {windowSize.width > 1000 ? (
            <Row className={style["main-landing-page__user-portraits-info"]}>
              <a href={routes.ROUTE_BLOG}>
                <button className={btnStyles["btn-primary"]} type="submit">
                  Go to cernera.me Blog
                </button>
              </a>
            </Row>
          ) : null}
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
