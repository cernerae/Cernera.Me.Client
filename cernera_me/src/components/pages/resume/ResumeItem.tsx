import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Accordion, Card } from "react-bootstrap";
import style from './ResumeItem.module.scss';


const ResumeItem = ({company, title, subtitle, logo}: {company: string, title: string, subtitle: string, logo:string }) => {
    return (
        <div id="ResumePage" className={style["resume-item"]}>
            
                <Container className={style["resume-item__container"]}>
                    <Row>
                        <Col sm={5} className={style["resume-item__col-left"]}>
                            <img src={logo} className={style["resume-item__logo"]}></img>
                        </Col>

                        <Col sm className={style["resume-item__col-right"]}>
                            <div className={style["resume-item__col-right__body"]}>
                                <div className={style["resume-item__col-right__company"]}>{company}</div>
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
