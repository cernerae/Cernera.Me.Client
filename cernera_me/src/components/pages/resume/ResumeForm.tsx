import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import ResumeItem from "components/pages/resume/ResumeItem";
import style from './ResumeForm.module.scss';


const ResumeForm: React.FC = () => {

    let ibm_company = `IBM`,
        ibm_title = `Back-End Software Developer Intern`,
        ibm_subtitle = `May 2019 - Present`,
        ibm_logo = require('../../../assets/images/ibm6.png');

    let avlino_company = `Avlino, Inc.`,
        avlino_title = `Software Enginner Intern`,
        avlino_subtitle = `May 2017 - August 2018`,
        avlino_logo = require('../../../assets/images/avlino.png');

    let palate_company = `The Healthy Palate`,
        palate_title = `IT Specialist`,
        palate_subtitle = `November 2015 - February 2016`,
        palate_logo = require('../../../assets/images/healthy_palate.PNG');

    let middletown_company = `Middletown Township`,
        middletown_title = `Camp Counselor`,
        middletown_subtitle = `June 2015 - August 2016`,
        middletown_logo = require('../../../assets/images/middletown.png');

    let marist_company = `Marist College`,
        marist_title = `B.S. Computer Science`,
        marist_subtitle = `Class of 2020`,
        marist_logo = require('../../../assets/images/marist2.png');

    return (
        <div id="ResumePage" className={style["resume-page"]}>
            <div className={style["resume-page__content"]}>

                <h1 className={style["resume-page__content__header"]}>Experience</h1>

                <ResumeItem company={ibm_company} title={ibm_title} subtitle={ibm_subtitle} logo={ibm_logo} />
                <ResumeItem company={avlino_company} title={avlino_title} subtitle={avlino_subtitle} logo={avlino_logo} />
                <ResumeItem company={palate_company} title={palate_title} subtitle={palate_subtitle} logo={palate_logo} />
                <ResumeItem company={middletown_company} title={middletown_title} subtitle={middletown_subtitle} logo={middletown_logo} />

                <h1 className={style["resume-page__content__header"]}>Education</h1>

                <ResumeItem company={marist_company} title={marist_title} subtitle={marist_subtitle} logo={marist_logo} />


                


                
               
            </div>
        </div>
    );
}

export default ResumeForm;
