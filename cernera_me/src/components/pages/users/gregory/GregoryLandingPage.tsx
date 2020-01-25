import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { TechLogo, SocialMediaUsernames } from "types";
import { socialUsernamesGregory } from "info/userInfo";
import apache_spark from "assets/images/tech/apache_spark_logo.png";
import docker from "assets/images/tech/docker_logo.png";
import hadoop from "assets/images/tech/hadoop_logo.png";
import kafka from "assets/images/tech/kafka_logo.png";
import linux from "assets/images/tech/linux_logo.png";
import nginx from "assets/images/tech/nginx_logo.png";
import python from "assets/images/tech/python_logo.png";
import react from "assets/images/tech/react_logo.png";
import scala from "assets/images/tech/scala_logo.png";
import tsjs from "assets/images/tech/tsjs_logo.png";
import java from "assets/images/tech/java_logo.png";
import gradle from "assets/images/tech/gradle_logo.png";
import jenkins from "assets/images/tech/jenkins_logo.png";

const GregoryLandingPage: React.FC = () => {

    const imageArray: TechLogo[] = [
        { image: tsjs, name: "Typescript & JavaScript" },
        { image: react, name: "React" },
        { image: python, name: "Python" },
        { image: java, name: "Java" },
        { image: docker, name: "Docker" },
        { image: linux, name: "Linux" },
        { image: gradle, name: "Gradle" },
        { image: jenkins, name: "Jenkins" },
        { image: apache_spark, name: "Apache Spark" },
        { image: hadoop, name: "Hadoop" }
    ];

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();
    const [imageLoopIndex, setImageLoopIndex] = useState(0);
    const [techImageStyle, setTechImageStyle] = useState(styles["hide-tech-image"]);

    const textBody = `
        At the moment, I am interning as a software developer at IBM while I finish my Senior year at Marist College. 
        Through my internships and education, I have been exposed to and worked in areas such as development operations 
        (DevOps), data analytics, web development, and data security. Although I specialize in back-end software development,
        I enjoy creating projects like this website that allow me to be creative with the skills I have learned.
        `;


    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
        const interval = setInterval(() => {
            console.log("Image Loop Index: " + imageLoopIndex);
            setImageLoopIndex(imageLoopIndex => {
                if (imageLoopIndex === imageArray.length - 1) {
                    return 0;
                } else {
                    return imageLoopIndex + 1;
                }
            })
        }, 2000);
        setTechImageStyle(styles["show-tech-image"]);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="GregoryLandingPage" className={styles["landing-page"]}>
            <Sidebar sm={true} user={"gregory"} social={socialUsernamesGregory} slideIn={true} />
            <div className={styles["landing-page__content"]}>
                <Container className={styles["landing-page__content__container"]}>
                    <Row className="h-100">
                        <Col md={6} className={styles["landing-page__content__container__vertical-center"]}>
                            <MainTextBlock title={"Gregory Cernera"} text={textBody} fadeIn={true} />
                        </Col>
                        <Col md={6} className={styles["landing-page__content__container__vertical-center"]} style={{ textAlign: "center" }}>
                            <img className={techImageStyle} height={200} width={200} src={imageArray[imageLoopIndex].image} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default GregoryLandingPage;
