import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../../sidebar/Sidebar";
import style from './ProjectsPage.module.scss';
import { getGitHubRepositoriesAction } from "../../../store/actions/actionCreators";
import { RepositoryCardList } from "../../github/RepositoryCardList";

const ProjectsPage: React.FC = () => {

    const counter: any = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Getting GitHub Repositories on load...")
        dispatch(getGitHubRepositoriesAction("cernerae"));
    }, []);

    return (
        <div id="ProjectsPage" className={style["projects-page"]}>
            <Sidebar />
            <div className={style["projects-page__content"]}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <p>Column 1 asfdad</p>
                            <Button onClick={() => dispatch(getGitHubRepositoriesAction("cernerae"))}>Start</Button>
                        </Col>
                        <Col md={4}>
                            <p>Column 2</p>
                            <p>{JSON.stringify(counter)}</p>
                        </Col>
                        <Col md={4}>
                            <p>Column 3</p>
                            <RepositoryCardList repositories={counter.gitHub.repositories} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProjectsPage;
