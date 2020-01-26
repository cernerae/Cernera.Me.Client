import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import ResumeItem from "components/pages/resume/ResumeItem";
import styles_resume from './ResumeForm.module.scss';
import styles from 'components/pages/LandingPage.module.scss';
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";

const ResumeForm = ({ user, social, experience, education }: { user: string, social: SocialMediaUsernames, experience: any, education: any }) => {

    const jobData = experience.map(function(job: any, index: any) {
        return (
            <ResumeItem name={job.name} title={job.title} subtitle={job.subtitle} logo={job.logo} />
        );
    });

    const schoolData = education.map(function(school: any, index: any) {
        return (
            <ResumeItem name={school.name} title={school.title} subtitle={school.subtitle} logo={school.logo} />
        );
    });

    return (
        <div id="ResumePage" className={styles_resume["resume-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <div>
                <Container className={styles["landing-page__content__container"]}>

                    <Row className="h-100">
                        <Col md={1} >
                            <h1 className={styles_resume["resume-page__content__header"]}>Experience</h1>
                        </Col>
                    </Row>
                    <Row>{jobData}</Row>

                    <Row className="h-100">
                        <Col md={1} >
                            <h1 className={styles_resume["resume-page__content__header"]}>Education</h1>
                        </Col>
                    </Row>
                    <Row>{schoolData}</Row>

                </Container>
            </div>
        </div>
    );
}

export default ResumeForm;
