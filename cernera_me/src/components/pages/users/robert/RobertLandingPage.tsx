import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import UserCard from "components/user/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "components/sidebar/Sidebar";
import styles from 'components/pages/LandingPage.module.scss';
import genStyle from "components/General.module.scss";
import MainTextBlock from "components/text/MainTextBlock";
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { TechLogo, SocialMediaUsernames } from "types";
import { socialUsernamesRobert } from "info/userInfo";
import bob_profile_pic from "assets/images/bob_profile_pic.jpeg";

import centos from "assets/images/tech/centos_logo.png";
import nginx from "assets/images/tech/nginx_logo.png";
import python from "assets/images/tech/python_logo.svg";
import tsjs from "assets/images/tech/tsjs_logo.png";
import java from "assets/images/tech/java_logo.png";
import linux from "assets/images/tech/linux_logo.png";
import node from "assets/images/tech/node_logo.png";
import redhat from "assets/images/tech/redhat_logo.png";
import ubuntu from "assets/images/tech/ubuntu_logo.png";
import aws from "assets/images/tech/aws_logo.png";
import mysql from "assets/images/tech/mysql_logo.png";
import postgres from "assets/images/tech/postgres_logo.png";
import redis from "assets/images/tech/redis_logo.png";

const RobertLandingPage: React.FC = () => {

    const imageArray: TechLogo[] = [
        { image: tsjs, name: "Typescript & JavaScript" },
        { image: python, name: "Python" },
        { image: nginx, name: "NGINX" },
        //{ image: centos, name: "CentOS" },
        { image: java, name: "Java" },
        { image: linux, name: "Linux" },
        { image: node, name: "NodeJS" },
        { image: redhat, name: "RedHat" },
        { image: ubuntu, name: "Ubuntu" },
        { image: aws, name: "AWS" },
        { image: mysql, name: "MySQL" },
        { image: postgres, name: "Postgres" },
        { image: redis, name: "Redis" },
        
    ];

    const dispatch = useDispatch();
    const [imageLoopIndex, setImageLoopIndex] = useState(0);
    const [techImageStyle, setTechImageStyle] = useState(styles["hide-tech-image"]);
    const [imageOpacity, setImageOpacity] = useState();

    const textBody = `
        I'm very fortunate to have had a career where I could follow my interests. 
        Those interests have allowed me to publish academic papers, defend networks, 
        lead incident response teams, create big data processing systems, write backend 
        microservices for web apps, and most recently, create a platform for retail 
        traders to deploy bots in the options market. I never shy away from challenges; 
        I seek them out.
        `

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("OptionAlphaRob"));
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
                <Sidebar sm={true} user={"robert"} social={socialUsernamesRobert} slideIn={true} />
                <div className={styles["landing-page__content"]}>
                    <Container className={styles["landing-page__content__container"]}>
                        <Row className={styles["landing-page__content__container__content"]}>
                            <Col md={6} className={genStyle["vertical-center"]}>
                                <Row>
                                    <Col className={genStyle["horizontal-center"]}>
                                        <UserCard keyName="robert" displayName="Robert Cernera" description="Software Engineer" image={bob_profile_pic} to="/edward" />
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

export default RobertLandingPage;
