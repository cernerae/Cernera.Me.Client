import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import genStyle from "components/General.module.scss";
import UserCard from "components/user/UserCard";
import styles from 'components/pages/LandingPage.module.scss';
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { TechLogo, SocialMediaUsernames } from "types";
import { socialUsernamesGregory } from "info/userInfo";
import greg_profile_pic from "assets/images/greg_profile_pic2.png";
import docker from "assets/images/tech/docker_logo.png";
import linux from "assets/images/tech/linux_logo.png";
import python from "assets/images/tech/python_logo.png";
import react from "assets/images/tech/react_logo.png";
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
        { image: jenkins, name: "Jenkins" }
    ];

    const dispatch = useDispatch();
    const [imageLoopIndex, setImageLoopIndex] = useState(0);
    const [techImageStyle, setTechImageStyle] = useState(styles["hide-tech-image"]);
    const [imageOpacity, setImageOpacity] = useState();

    const textBody = `
        At the moment, I am interning as a software engineer at IBM while I finish my senior year at Marist College. 
        Through my internships and education, I have been exposed to projects involving DevOps, data analytics, web development, and data security. Although I specialize in back-end software development,
        I enjoy creating projects like this website that allow me to be creative with the skills I have learned.
        `;


    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("gregorycernera"));
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
            <div id="GregoryLandingPage" className={[styles["landing-page"], styles["user-landing-page"]].join(' ')}>
                <Sidebar sm={true} user={"gregory"} social={socialUsernamesGregory} slideIn={true} />
                <div className={styles["landing-page__content"]}>
                    <Container className={styles["landing-page__content__container"]}>
                        <Row className={styles["landing-page__content__container__content"]}>
                            <Col md={6} className={genStyle["vertical-center"]}>
                                <Row>
                                    <Col className={genStyle["horizontal-center"]}>
                                        <UserCard keyName="edward" displayName="Gregory Cernera" description="Software Engineer" image={greg_profile_pic} to="/gregory" />
                                    </Col>
                                </Row>
                                <Row>
                                    <MainTextBlock text={textBody} fadeIn={true} />
                                </Row>
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

export default GregoryLandingPage;
