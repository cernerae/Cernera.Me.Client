import React from 'react';
import { Col } from "react-bootstrap";
import styles from 'components/pages/LandingPage.module.scss';
import { TechLogoType } from "types";

const ImageCollage = ({ imageArray }: { imageArray: TechLogoType[] }) => {

    return (
        <>
            {
                imageArray.map((image, index) =>
                    <Col xs={6} md={4} style={{ height: "100%" }}>
                        <div key={`tech-image-cont-${index}`} style={{ margin: "25px" }}>
                            <img key={`tech-image-${index}`} className={styles["show-tech-image"]} src={image.image} alt={image.name} />
                        </div>
                    </Col>
                )
            }
        </>
    );
}

export default ImageCollage;
