import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { TechLogo, SocialMediaUsernames } from "types";
import { socialUsernames } from "info/userInfo";
import apache_spark from "assets/images/tech/apache_spark_logo.png";
import docker from "assets/images/tech/docker_logo.png";
import hadoop from "assets/images/tech/hadoop_logo.png";
import kafka from "assets/images/tech/kafka_logo.png";
import centos from "assets/images/tech/centos_logo.png";
import nginx from "assets/images/tech/nginx_logo.png";
import python from "assets/images/tech/python_logo.svg";
import react from "assets/images/tech/react_logo.png";
import scala from "assets/images/tech/scala_logo.png";
import tsjs from "assets/images/tech/tsjs_logo.png";

const EdwardLandingPage: React.FC = () => {

    const imageArray: TechLogo[] = [
        { image: tsjs, name: "Typescript & JavaScript" },
        { image: react, name: "React" },
        { image: scala, name: "Scala" },
        { image: python, name: "Python" },
        { image: docker, name: "Docker" },
        { image: nginx, name: "NGINX" },
        { image: centos, name: "CentOS" },
        { image: kafka, name: "Kafka" },
        { image: apache_spark, name: "Apache Spark" },
        { image: hadoop, name: "Hadoop" }
    ];

    const dispatch = useDispatch();
    const [imageLoopIndex, setImageLoopIndex] = useState(0);
    const [techImageStyle, setTechImageStyle] = useState(styles["hide-tech-image"]);
    const [imageOpacity, setImageOpacity] = useState();

    const textBody = `
        As a software and data engineer working in the startup world for the last four years, I have been exposed
        to multiple areas of software development. From designing and constructing data analytics pipelines to creating entire
        stacks of web services, I have always been excited about connecting services end to end to understand 
        the greater picture. I enjoy being self-sufficient, but enjoy being part of a motivated team even more.
        `

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
        <>
            <div id="EdwardLandingPage" className={[styles["landing-page"], styles["user-landing-page"]].join(' ')}>
                <Sidebar sm={true} user={"edward"} social={socialUsernames} slideIn={true} />
                <div className={styles["landing-page__content"]}>
                    <Container className={styles["landing-page__content__container"]}>
                        <Row className={styles["landing-page__content__container__content"]}>
                            <Col md={6} className={genStyle["vertical-center"]}>
                                <MainTextBlock title={"edward cernera"} text={textBody} fadeIn={true} />
                            </Col>
                            <Col md={6} className={[genStyle["vertical-center"], "w-100"].join(' ')}>
                                <div className={[genStyle["horizontal-center"], "w-100"].join(' ')}>
                                    { /* <img className={techImageStyle} src={imageArray[imageLoopIndex].image} alt={imageArray[imageLoopIndex].name} /> */}
                                    <Row>
                                        {imageArray.map((image, index) =>
                                            <Col xs={12} md={4} style={{ height: "100%" }}>
                                                <div style={{ margin: "25px" }}>
                                                    <img className={techImageStyle} src={image.image} alt={image.name} style={{ opacity: imageOpacity }} />
                                                </div>
                                            </Col>)}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default EdwardLandingPage;
