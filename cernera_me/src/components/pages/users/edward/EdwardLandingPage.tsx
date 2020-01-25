import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Image } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { TechLogo } from "types";
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

const EdwardLandingPage: React.FC = () => {

    const imageArray: TechLogo[] = [
        { image: tsjs, name: "Typescript & JavaScript" },
        { image: react, name: "React" },
        { image: scala, name: "Scala" },
        { image: python, name: "Python" },
        { image: docker, name: "Docker" },
        { image: nginx, name: "NGINX" },
        { image: linux, name: "Linux" },
        { image: kafka, name: "Kafka" },
        { image: apache_spark, name: "Apache Spark" },
        { image: hadoop, name: "Hadoop" }
    ];

    const cycleImages = (arrayLength: number, i: number) => {
        let index = i;
        if (i === arrayLength) {
            console.log(`${i} = ${arrayLength}. Setting index = 0 ...`);
            index = 0;
        }
        console.log("Setting Image Loop Index: " + index);
        setImageLoopIndex(index);
    }

    const store: any = useSelector(state => state);
    const dispatch = useDispatch();
    const [imageLoopIndex, setImageLoopIndex] = useState(0);
    const [techImageStyle, setTechImageStyle] = useState(styles["hide-tech-image"]);

    const textBody = `
        As a software and data engineer working in the startup world for the last four years, I have been exposed
        to multiple areas of software development. From designing and constructing data analytics pipelines to creating entire
        stacks of web services, I have always been excited about connecting services end to end to understand 
        the greater picture. I enjoy being self-sufficient, but enjoy be part of a motivated team even more.
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
        <div id="EdwardLandingPage" className={styles["landing-page"]}>
            <Sidebar sm={true} slideIn={true} />
            <div className={styles["landing-page__content"]}>
                <Container className={styles["landing-page__content__container"]}>
                    <Row className="h-100">
                        <Col md={6} className={styles["landing-page__content__container__vertical-center"]}>
                            <MainTextBlock title={"edward cernera"} text={textBody} fadeIn={true} />
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

export default EdwardLandingPage;
