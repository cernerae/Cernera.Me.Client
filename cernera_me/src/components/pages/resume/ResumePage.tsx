import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles_resume from "./ResumePage.module.scss";
import Sidebar from "components/sidebar/Sidebar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";
import Description from "@material-ui/icons/Description";
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";
import btnStyles from "components/button/Button.module.scss";

const ResumePage = ({
  username,
  allUsers,
}: {
  username: string;
  allUsers: UserInfoType[];
}) => {
  const history = useHistory();
  const user: UserInfoType | undefined = findUser(allUsers, username);

  const jobData: JSX.Element[] | undefined =
    user &&
    user.careerExperience.map(function (job: any, index: any) {
      return (
        <VerticalTimelineElement
          contentStyle={{
            color: "black",
            boxShadow: "0px 3px 5px -3px #000",
            borderStyle: "solid",
            borderColor: "#c6c6c6",
            borderWidth: "1px",
          }}
          contentArrowStyle={{ borderRight: "10px solid #c6c6c6" }}
          iconStyle={{ background: "#42be65", color: "#fff" }}
          icon={<Work />}
        >
          <img
            src={require(`../../../assets/images/${job.logo}`)}
            className={styles_resume["resume-page__content__logo"]}
            alt={"Job"}
          />
          <h4 className={styles_resume["resume-page__content__title"]}>
            {job.title}
          </h4>
          <h3 className={styles_resume["resume-page__content__organization"]}>
            {job.name}
          </h3>
          <h3 className={styles_resume["resume-page__content__subtitle"]}>
            {job.subtitle}
          </h3>
        </VerticalTimelineElement>
      );
    });

  const schoolData: JSX.Element[] | undefined =
    user &&
    user.education.map(function (school: any, index: any) {
      return (
        <VerticalTimelineElement
          contentStyle={{
            color: "black",
            boxShadow: "0px 3px 5px -3px #000",
            borderStyle: "solid",
            borderColor: "#c6c6c6",
            borderWidth: "1px",
          }}
          contentArrowStyle={{ borderRight: "10px solid #c6c6c6" }}
          iconStyle={{ background: "#393939", color: "#fff" }}
          icon={<School />}
          date={school.subtitle}
        >
          <img
            src={require(`../../../assets/images/${school.logo}`)}
            className={styles_resume["resume-page__content__logo"]}
            alt={"Education"}
          />
          <h3 className={styles_resume["resume-page__content__organization"]}>
            {school.name}
          </h3>
          <h4 className={styles_resume["resume-page__content__title"]}>
            {school.title}
          </h4>
        </VerticalTimelineElement>
      );
    });

  const publicationData: JSX.Element[] | undefined =
    user &&
    user.publication.map(function (publication: any, index: any) {
      return (
        <VerticalTimelineElement
          contentStyle={{
            color: "black",
            boxShadow: "0px 3px 5px -3px #000",
            borderStyle: "solid",
            borderColor: "#c6c6c6",
            borderWidth: "1px",
          }}
          contentArrowStyle={{ borderRight: "10px solid #c6c6c6" }}
          iconStyle={{ background: "#42be65", color: "#fff" }}
          icon={<Description />}
        >
          <h4 className={styles_resume["resume-page__content__title"]}>
            {publication.title}
          </h4>
          <p className={styles_resume["resume-page__content__organization"]}>
            <b>Author: </b>
            {publication.author}; <b>Published</b>: {publication.year}
          </p>
          <Button href={publication.link} className={btnStyles["btn-standard"]}>
            Read
          </Button>
        </VerticalTimelineElement>
      );
    });

  return (
    <>
      {user ? (
        <div id="ResumePage" className={styles_resume["resume-page"]}>
          <Sidebar sm={true} slideIn={false} user={user} />
          <Container>
            <Row>
              <Col xs={0} sm={1} />
              <Col xs={12} sm={10}>
                <VerticalTimeline
                  className={styles_resume["vertical-timeline-custom-line"]}
                  layout={"2-columns"}
                >
                  {jobData}
                  {schoolData}
                  {publicationData}
                </VerticalTimeline>
              </Col>
              <Col xs={0} sm={1} />
            </Row>
          </Container>
        </div>
      ) : (
        history.goBack()
      )}
    </>
  );
};

export default ResumePage;
