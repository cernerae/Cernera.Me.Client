import React from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import style from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
    return (
        <div id="AboutPage" className={style["about-page"]}>
            <div className={style["about-page__content"]}>
                <Container fluid>
                    <Row  className="show-grid">

                        <Col style={{maxWidth: '260px'}}><Sidebar/></Col>

                        <Col>
                            
                            <img className={style["about-page__content__profile-pic"]} src={require('../../images/greg_profile_pic.jpg')}/>
                            <h1 className={style["about-page__content__hello"]}>Hi! My name is Gregory Cernera</h1>
                            <h1 className={style["about-page__content__body-text"]}>Full stack developer / Data engineer / Student</h1>
                        
                            <Accordion className={style["about-page__content__accordion"]}>

                                <Card >
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="0">Summary</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>
                                    <ul>
                                        <li>A software developer seeking employment in the fields of back-end software development and data analytics</li>
                                        <li>Proficient in Python, Java, JavaScript, Linux/UNIX, GitHub, and server environments</li>
                                        <li>Familiar with SQL/MySQL databases, React, Node.js, TypeScript, HTML/CSS, and C++</li>
                                        <li>Knowledgeable with Jenkins, Docker (Linux), Apache Hadoop/Spark, and Azure</li>
                                    </ul> 
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="1">Education</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>
                                        <ul>
                                            <li>Marist College - Class of 2020</li>
                                            <li>B.S. Computer Science</li>
                                            <li>Minors in Cybersecurity, Information Systems, and Information Technology</li>
                                            <ul>
                                                <li>GPA: 3.83 / 4.0</li>
                                                <li>Scholarships: Marist College Presidential Scholarship and Robert Crosby Memorial Scholarship</li>
                                            </ul>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="2">Experience</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>
                                        <ul>
                                            <li><strong>IBM </strong> - <i>Back-end Software Developer Intern</i></li>
                                            <p><i>May 2019 to Present - Poughkeepsie, NY</i></p>
                                            <ul>
                                                <li>Part of the Java z Security team and worked on tasks associated with improving their Development Operations (DevOps)</li>
                                                <li>Lead the operation for converting and rewriting Java files on the z/OS platform to support Java Versions 7.1 and 7.0</li>
                                                <li>Ran and tested build cycles on z/OS and Linux servers using applications such as Jenkins, Urban Code Deploy, Ansible, and Apache Ant</li>
                                                <li>Presented my work from the summer at the IBM TechConnect 2019 conference</li>
                                            </ul>
                                        </ul>

                                        <ul>
                                            <li><strong>Avlino, Inc. </strong> - <i>Data Engineer & Software Developer Intern</i></li>
                                            <p><i>May to August, 2017 & 2018 - Holmdel, NJ</i></p>
                                            <ul>
                                                <li>Introduced to the topics of machine learning and augmented intelligence</li>
                                                <li>Assisted with building a pipeline consisting of data collection and analysis from social media websites and client databases</li>
                                                <li>Organized and visualized collected data for use with Apache Hadoop/Spark on Azure servers running Linux and with Microsoft Power BI</li>
                                                <li>Researched and developed a program to collect large amounts of data from reddit.com using their application programming interface using Python</li>
                                                <li>Trained a sentiment indicator for Amazon reviews using Naive Bayes and scikit-learn, along with developing a natural language spell checking process using Python</li>
                                            </ul>
                                        </ul>

                                        <ul>
                                            <li><strong>The Healthy Palate </strong> - <i>IT Consultant</i></li>
                                            <p><i>November 2015 to February 2016 - Little Silver, NJ</i></p>
                                            <ul>
                                                <li>Oversaw finance management and budgeting with my manager using the program Quicken</li>
                                                <li>Transcribed all records and documentation to digital form</li>
                                                <li>Assisted supervisor with programs including Constant Contact and Excel</li>
                                                <li>Helped clients set up and manage their food delivery plan</li>
                                            </ul>
                                        </ul>

                                        <ul>
                                            <li><strong>Middletown Township Parks & Recreation </strong> - <i>Camp Counselor</i></li>
                                            <p><i>June to August, 2015 & 2016 - Middletown, NJ</i></p>
                                            <ul>
                                                <li>Supervised 20+ minors ranging from ages 6 to 13 with a co-counselor</li>
                                                <li>Communicated with parents regarding their child's expected behavior and daily reports</li>
                                                <li>Identified and responded to physical and behavioral mistreatment among campers</li>
                                            </ul>
                                        </ul>

                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="3">Projects & Publications</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>
                                        <ul>
                                            <li><strong>ICN Tool Modernization Project, IBM </strong></li>
                                            <ul>
                                                <li>Helped build an enhanced ICN (Interface Change Notification) management and scheduling web application for IBM employees</li>
                                                <li>Assisted with the front-end design using React, Node.js, and HTML/CSS</li>
                                            </ul>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="4">Awards</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>
                                        <ul>
                                            <li><strong>2H 2019 Agile Excellence Award, IBM </strong></li>
                                            <ul>
                                                <li>Awarded to my team for our work on the ICN Tool Modernization Project</li>
                                            </ul>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle className={style["about-page__content__accordion-header"]} as={Card.Header} eventKey="5">Additional Activities</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                    <Card.Body className={style["about-page__content__accordion-body"]}>
                                        <ul>
                                            <li>Marist College Computer Society <i>(Member)</i></li>
                                            <li>National Honor Society <i>(Member)</i></li>
                                            <li>Campus Ministry <i>(Member)</i></li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                

                            </Accordion>

                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AboutPage;
