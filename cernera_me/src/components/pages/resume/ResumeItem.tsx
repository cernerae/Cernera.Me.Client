import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import style from './ResumeItem.module.scss';


const ResumeItem = ({ name, title, subtitle, logo }: { name: string, title: string, subtitle: string, logo: string }) => {
    return (
        <div id="ResumeItem" key={name} className={style["resume-item"]}>

            <Container className={style["resume-item__container"]}>
                <Row>
                    <Col sm={5} className={style["resume-item__col-left"]}>
                        <img src={require(`../../../assets/images/${logo}`)} className={style["resume-item__logo"]}></img>
                    </Col>

                    <Col sm className={style["resume-item__col-right"]}>
                        <div className={style["resume-item__col-right__body"]}>
                            <div className={style["resume-item__col-right__company"]}>{name}</div>
                            <div className={style["resume-item__col-right__title"]}>{title}</div>
                            <div className={style["resume-item__col-right__subtitle"]}>{subtitle}</div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default ResumeItem;
