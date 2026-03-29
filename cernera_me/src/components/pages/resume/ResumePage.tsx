import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import styles from "./ResumePage.module.scss";
import Sidebar from "components/sidebar/Sidebar";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";
import btnStyles from "components/button/Button.module.scss";

// ─── Sub-components ────────────────────────────────────────────────────────────

const SectionHeader = ({ label }: { label: string }) => (
  <div className={styles["section-header"]}>
    <div className={styles["section-header__line"]} />
    <span className={styles["section-header__label"]}>{label}</span>
    <div className={styles["section-header__line"]} />
  </div>
);

type NodeType = "work" | "school" | "publication";

const TimelineNode = ({ type }: { type: NodeType }) => (
  <div className={`${styles["node"]} ${styles[`node--${type}`]}`}>
    {type === "work"        && <WorkIcon        sx={{ fontSize: 15 }} />}
    {type === "school"      && <SchoolIcon      sx={{ fontSize: 15 }} />}
    {type === "publication" && <DescriptionIcon sx={{ fontSize: 15 }} />}
  </div>
);

interface TimelineRowProps {
  index: number;
  type: NodeType;
  children: React.ReactNode;
}

const TimelineRow = ({ index, type, children }: TimelineRowProps) => {
  const side = index % 2 === 0 ? "left" : "right";
  return (
    <div className={`${styles["tl-row"]} ${styles[`tl-row--${side}`]}`}>
      <div className={styles["tl-node"]}>
        <TimelineNode type={type} />
      </div>
      <div className={styles["tl-card"]}>
        <div className={styles["card"]}>{children}</div>
      </div>
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const ResumePage = ({ allUsers }: { allUsers: UserInfoType[] }) => {
  const { user: username } = useParams();
  const navigate = useNavigate();
  const user: UserInfoType | undefined = findUser(allUsers, username || "");

  if (!user) {
    navigate(-1);
    return null;
  }

  let idx = 0;

  const jobItems = user.careerExperience.map((job, i) => (
    <TimelineRow key={`job-${i}`} index={idx++} type="work">
      <img
        src={new URL(`../../../assets/images/${job.logo}`, import.meta.url).href}
        className={styles["card-logo"]}
        alt={job.name}
      />
      <p className={styles["card-title"]}>{job.title}</p>
      <p className={styles["card-org"]}>{job.name}</p>
      <p className={styles["card-subtitle"]}>{job.subtitle}</p>
    </TimelineRow>
  ));

  const schoolItems = user.education.map((school, i) => (
    <TimelineRow key={`edu-${i}`} index={idx++} type="school">
      <img
        src={new URL(`../../../assets/images/${school.logo}`, import.meta.url).href}
        className={styles["card-logo"]}
        alt={school.name}
      />
      <p className={styles["card-title"]}>{school.title}</p>
      <p className={styles["card-org"]}>{school.name}</p>
      <p className={styles["card-subtitle"]}>{school.subtitle}</p>
    </TimelineRow>
  ));

  const pubItems = user.publication.map((pub, i) => (
    <TimelineRow key={`pub-${i}`} index={idx++} type="publication">
      <p className={styles["card-title"]}>{pub.title}</p>
      <p className={styles["card-meta"]}>
        <span className={styles["card-meta__key"]}>author</span>{pub.author}
      </p>
      <p className={styles["card-meta"]}>
        <span className={styles["card-meta__key"]}>year</span>{pub.year}
      </p>
      <Button href={pub.link} className={btnStyles["btn-standard"]}>
        Read
      </Button>
    </TimelineRow>
  ));

  return (
    <div id="ResumePage" className={styles["resume-page"]}>
      <Sidebar sm={true} slideIn={false} user={user} />
      <Container>
        <div className={styles["timeline-wrapper"]}>
          <div className={styles["timeline"]}>

            {jobItems.length > 0 && <SectionHeader label="Experience" />}
            {jobItems}

            {schoolItems.length > 0 && <SectionHeader label="Education" />}
            {schoolItems}

            {pubItems.length > 0 && <SectionHeader label="Publications" />}
            {pubItems}

          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResumePage;
