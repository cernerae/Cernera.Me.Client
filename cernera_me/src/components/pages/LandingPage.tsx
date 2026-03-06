import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { getPostsAction } from "store/actionCreators";
import { getPostsResponse } from "store/selectors";
import PostList from "./blog/PostList";

const LandingPage = ({ users }: { users: UserInfoType[] }) => {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const posts = useSelector(getPostsResponse);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  const portraitData: React.JSX.Element[] | undefined =
    users &&
    users.map(function (user: any, index: any) {
      return (
        <Col
          key={index}
          xs={6}
          md={3}
          className={style["landing-page-portrait-column"]}
        >
          <UserCard user={user} useFirstNameOnly={true} hideTitle={true} />
        </Col>
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
            </Col>
          </Row>
          <Row className={style["main-landing-page__user-portraits"]}>
            {portraitData}
          </Row>
          <PostList posts={posts} />
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
