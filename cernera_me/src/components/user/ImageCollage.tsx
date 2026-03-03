import React from "react";
import { Col } from "react-bootstrap";
import styles from "./ImageCollage.module.scss";
import { TechLogoType } from "types";

const ImageCollage = ({ imageArray }: { imageArray: TechLogoType[] }) => {
  return (
    <>
      {imageArray.map((image, index) => (
        <Col xs={6} md={4} key={`tech-image-col-${index}`} style={{ padding: "10px" }}>
          <div className={styles["tech-image-card"]}>
            <img
              className={styles["show-tech-image"]}
              src={image.image}
              alt={image.name}
            />
          </div>
        </Col>
      ))}
    </>
  );
};

export default ImageCollage;
