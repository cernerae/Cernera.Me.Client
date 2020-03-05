import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import ResumeItem from "components/pages/resume/ResumeItem";
import styles_resume from './ResumeForm.module.scss';
import styles from 'components/pages/LandingPage.module.scss';
import { SocialMediaUsernames } from "types";
import Sidebar from "components/sidebar/Sidebar";

import { Document, Page } from 'react-pdf';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Work from '@material-ui/icons/Work';
import School from '@material-ui/icons/School';
import Description from '@material-ui/icons/Description';

const ResumeForm = ({ user, social, experience, education, publications }: { user: string, social: SocialMediaUsernames, experience: any, education: any, publications: any }) => {

    const jobData = experience.map(function(job: any, index: any) {
        return (
            

            <VerticalTimelineElement
                    contentStyle={{ background: '#e0e0e0', color: 'black', boxShadow: '7px 10px 12px grey', fontWeight: 'bold' }}
                    contentArrowStyle={{ borderRight: '10px solid #e0e0e0' }}
                    iconStyle={{ background: '#42be65', color: '#fff' }}
                    icon={<Work/>}
                    date={job.subtitle}
                >
                    <img src={require(`../../../assets/images/${job.logo}`)} className={styles_resume["resume-page__content__logo"]}></img>
                    <h3 className="vertical-timeline-element-title">{job.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{job.title}</h4>
                    
                </VerticalTimelineElement>

        );
    });

    const schoolData = education.map(function(school: any, index: any) {
        return (
            <VerticalTimelineElement
                    contentStyle={{ background: '#e0e0e0', color: 'black', boxShadow: '7px 10px 12px grey' }}
                    contentArrowStyle={{ borderRight: '12px solid #e0e0e0' }}
                    iconStyle={{ background: '#393939', color: '#fff' }}
                    icon={<School/>}
                    date={school.subtitle}
                >
                    <img src={require(`../../../assets/images/${school.logo}`)} className={styles_resume["resume-page__content__logo"]}></img>
                    <h3 className="vertical-timeline-element-title">{school.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{school.title}</h4>
                    
                </VerticalTimelineElement>
        );
    });


    let publicationData = null;
    if (publications !== null) {
        publicationData = publications.map(function(publication: any, index: any) {
            return (
                <VerticalTimelineElement
                        contentStyle={{ background: '#e0e0e0', color: 'black', boxShadow: '7px 10px 12px grey', fontWeight: 'bold' }}
                        contentArrowStyle={{ borderRight: '10px solid #e0e0e0' }}
                        iconStyle={{ background: '#42be65', color: '#fff' }}
                        icon={<Description/>}
                        date={publication.year}
                    >
                        <h4 className="vertical-timeline-element-title">{publication.title}</h4>
                        <p className="vertical-timeline-element-subtitle"><b>Author: </b>{publication.author}</p>
                        <p className="vertical-timeline-element-subtitle">{publication.link}</p>
                        
                    </VerticalTimelineElement>
    
            );
        });
    }

    


    return (
        <div id="ResumePage" className={styles_resume["resume-page"]}>
            <Sidebar sm={true} slideIn={false} user={user} social={social} />
            <div>
            
            <VerticalTimeline className={styles_resume["vertical-timeline"]} layout={'2-columns'}>

                {jobData}
                {schoolData}
                {publicationData}

            </VerticalTimeline>

            </div>
        </div>
    );
}

export default ResumeForm;
