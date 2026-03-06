import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles_resume from "./ResumePage.module.scss";
import Sidebar from "components/sidebar/Sidebar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";
import btnStyles from "components/button/Button.module.scss";

const ResumePage = ({
  allUsers,
}: {
  allUsers: UserInfoType[];
}) => {
  const { user: username } = useParams();
  const navigate = useNavigate();
  const user: UserInfoType | undefined = findUser(allUsers, username || "");

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(108, 99, 255, 0.25)",
    borderTop: "2px solid #6c63ff",
    boxShadow: "none",
    color: "whitesmoke",
  };

  const cardArrowStyle = { borderRight: "10px solid rgba(108, 99, 255, 0.25)" };

  const jobData: React.JSX.Element[] | undefined =
    user &&
    user.careerExperience.map(function (job: any, index: any) {
      return (
        <VerticalTimelineElement
          key={index}
          contentStyle={cardStyle}
          contentArrowStyle={cardArrowStyle}
          iconStyle={{ background: "#42be65", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <img
            src={new URL(`../../../assets/images/${job.logo}`, import.meta.url).href}
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

  const schoolData: React.JSX.Element[] | undefined =
    user &&
    user.education.map(function (school: any, index: any) {
      return (
        <VerticalTimelineElement
          key={index}
          contentStyle={cardStyle}
          contentArrowStyle={cardArrowStyle}
          iconStyle={{ background: "#007BFF", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img
            src={new URL(`../../../assets/images/${school.logo}`, import.meta.url).href}
            className={styles_resume["resume-page__content__logo"]}
            alt={"Education"}
          />
          <h3 className={styles_resume["resume-page__content__title"]}>
            {school.title}
          </h3>
          <h3 className={styles_resume["resume-page__content__organization"]}>
            {school.name}
          </h3>
          <h3 className={styles_resume["resume-page__content__subtitle"]}>
            {school.subtitle}
          </h3>
        </VerticalTimelineElement>
      );
    });

  const publicationData: React.JSX.Element[] | undefined =
    user &&
    user.publication.map(function (publication: any, index: any) {
      return (
        <VerticalTimelineElement
          key={index}
          contentStyle={cardStyle}
          contentArrowStyle={cardArrowStyle}
          iconStyle={{ background: "#42be65", color: "#fff" }}
          icon={<DescriptionIcon />}
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
        navigate(-1)
      )}
    </>
  );
};

export default ResumePage;
