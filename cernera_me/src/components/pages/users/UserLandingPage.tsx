import React from "react";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "lib/hooks";
import UserCard from "components/user/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import landingStyles from "components/pages/LandingPage.module.scss";
import genStyle from "components/General.module.scss";
import styles from "./UserLandingPage.module.scss";
import MainTextBlock from "components/text/MainTextBlock";
import ImageCollage from "components/user/ImageCollage";
import { findUser } from "info/userInfo";
import { UserInfoType } from "types";

const UserLandingPage = ({
  username,
  allUsers,
}: {
  username: string;
  allUsers: UserInfoType[];
}) => {
  const history = useHistory();
  const windowSize = useWindowSize();
  const user: UserInfoType | undefined = findUser(allUsers, username);

  return (
    <>
      {user ? (
        <div
          id="UserLandingPage"
          className={[
            landingStyles["landing-page"],
            landingStyles["user-landing-page"],
          ].join(" ")}
        >
          <Sidebar sm={true} slideIn={true} user={user} />
          <div
            className={[
              landingStyles["landing-page__content"],
              styles["user-landing-page"],
            ].join(" ")}
            style={{ paddingLeft: "30px" }}
          >
            <Container
              className={landingStyles["landing-page__content__container"]}
            >
              <Row
                className={
                  landingStyles["landing-page__content__container__content"]
                }
              >
                <Col md={12} lg={6} className={genStyle["vertical-center"]}>
                  <Row>
                    <Col className={genStyle["horizontal-center"]}>
                      <UserCard user={user} clickDisabled={true} />
                    </Col>
                  </Row>
                  <Row>
                    <div
                      style={{
                        paddingLeft: windowSize.width < 1350 ? "5vw" : "0",
                      }}
                    >
                      <MainTextBlock text={user.introText} fadeIn={true} />
                    </div>
                  </Row>
                </Col>
                <Col
                  md={12}
                  lg={6}
                  className={[
                    genStyle["vertical-center"],
                    "w-100",
                    styles["tech-images"],
                  ].join(" ")}
                >
                  <div
                    className={[genStyle["horizontal-center"], "w-100"].join(
                      " "
                    )}
                  >
                    <Row>
                      <ImageCollage imageArray={user.techLogos} />
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ) : (
        history.goBack()
      )}
    </>
  );
};

export default UserLandingPage;
