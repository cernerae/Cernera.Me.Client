import React from 'react';
import { useHistory } from "react-router-dom";
import styles_resume from './ResumePage.module.scss';
import Sidebar from "components/sidebar/Sidebar";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Work from '@material-ui/icons/Work';
import School from '@material-ui/icons/School';
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";

const ResumePage = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const history = useHistory();
    const user: UserInfoType | undefined = findUser(allUsers, username);

    const jobData: JSX.Element[] | undefined = user && user.careerExperience.map(function (job: any, index: any) {
        return (
            <VerticalTimelineElement
                contentStyle={{ background: '#e0e0e0', color: 'black', boxShadow: '7px 10px 12px grey', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '10px solid #e0e0e0' }}
                iconStyle={{ background: '#42be65', color: '#fff' }}
                icon={<Work />}
                date={job.subtitle}
            >
                <img src={require(`../../../assets/images/${job.logo}`)} className={styles_resume["resume-page__content__logo"]}></img>
                <h3 className="vertical-timeline-element-title">{job.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{job.title}</h4>
            </VerticalTimelineElement>
        );
    });

    const schoolData: JSX.Element[] | undefined = user && user.education.map(function (school: any, index: any) {
        return (
            <VerticalTimelineElement
                contentStyle={{ background: '#e0e0e0', color: 'black', boxShadow: '7px 10px 12px grey' }}
                contentArrowStyle={{ borderRight: '12px solid #e0e0e0' }}
                iconStyle={{ background: '#393939', color: '#fff' }}
                icon={<School />}
                date={school.subtitle}
            >
                <img src={require(`../../../assets/images/${school.logo}`)} className={styles_resume["resume-page__content__logo"]}></img>
                <h3 className="vertical-timeline-element-title">{school.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{school.title}</h4>

            </VerticalTimelineElement>
        );
    });

    return (
        <>
            {
                user
                    ?
                    <div id="ResumePage" className={styles_resume["resume-page"]}>
                        <Sidebar sm={true} slideIn={false} user={user} />
                        <div>
                            <VerticalTimeline className={styles_resume["vertical-timeline"]} layout={'2-columns'}>
                                {jobData}
                                {schoolData}
                            </VerticalTimeline>
                        </div>
                    </div>
                    : history.goBack()
            }
        </>
    );
}

export default ResumePage;
