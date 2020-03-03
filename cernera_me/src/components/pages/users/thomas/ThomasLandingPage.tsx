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
import { socialUsernamesThomas } from "info/userInfo";
import tom_profile_pic from "assets/images/tom_profile_pic.jpg";


const ThomasLandingPage: React.FC = () => {

    const imageArray: TechLogo[] = [
        
        
    ];

    const dispatch = useDispatch();
    const [imageLoopIndex, setImageLoopIndex] = useState(0);
    const [techImageStyle, setTechImageStyle] = useState(styles["hide-tech-image"]);
    const [imageOpacity, setImageOpacity] = useState();

    const textBody = `
        TODO --> Tom's paragraph
        `

    /*
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
    */

    return (
        <>
            <div id="EdwardLandingPage" className={[styles["landing-page"], styles["user-landing-page"]].join(' ')}>
                <Sidebar sm={true} user={"thomas"} social={socialUsernamesThomas} slideIn={true} />
                <div className={styles["landing-page__content"]}>
                    <Container className={styles["landing-page__content__container"]}>
                        <Row className={styles["landing-page__content__container__content"]}>
                            <Col md={6} className={genStyle["vertical-center"]}>
                                <Row>
                                    <Col className={genStyle["horizontal-center"]}>
                                        <UserCard keyName="thomas" displayName="Thomas Cernera" description="IT Specialist" image={tom_profile_pic} to="/edward" />
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

export default ThomasLandingPage;
