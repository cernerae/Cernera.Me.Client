import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import ResumeItem from "components/pages/resume/ResumeItem";
import styles_resume from './ResumeForm.module.scss';
import styles from 'components/pages/LandingPage.module.scss';
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Work from '@material-ui/icons/Work';
import School from '@material-ui/icons/School';

const ResumeForm = ({ user, social, experience, education }: { user: string, social: SocialMediaUsernames, experience: any, education: any }) => {

    const jobData = experience.map(function(job: any, index: any) {
        return (
            

            <VerticalTimelineElement
                    contentStyle={{ background: '#e8e8e8', color: 'black', boxShadow: '7px 10px 12px grey' }}
                    contentArrowStyle={{ borderRight: '10px solid #e8e8e8' }}
                    iconStyle={{ background: '#42be65', color: '#fff' }}
                    icon={<Work/>}
                >
                    <h3 className="vertical-timeline-element-title">{job.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{job.title}</h4>
                    
                    <p>
                    {job.subtitle}
                    </p>
                </VerticalTimelineElement>

        );
    });

    const schoolData = education.map(function(school: any, index: any) {
        return (
            <VerticalTimelineElement
                    contentStyle={{ background: '#e8e8e8', color: 'black', boxShadow: '7px 10px 12px grey'  }}
                    contentArrowStyle={{ borderRight: '12px solid #e8e8e8' }}
                    
                    iconStyle={{ background: '#393939', color: '#fff' }}
                    icon={<School/>}
                >
                    <h3 className="vertical-timeline-element-title">{school.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{school.title}</h4>
                    <p>
                    {school.subtitle}
                    </p>
                </VerticalTimelineElement>
        );
    });

    return (
        <div id="ResumePage" className={styles_resume["resume-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <div>
            
            <VerticalTimeline className={styles_resume["vertical-timeline"]}>

                {jobData}
                {schoolData}

            </VerticalTimeline>

            </div>
        </div>
    );
}

export default ResumeForm;
