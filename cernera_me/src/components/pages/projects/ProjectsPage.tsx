import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "components/sidebar/FullSidebar";
import style from './ProjectsPage.module.scss';
import { getGitHubRepositoriesAction } from "store/actions/actionCreators";
import { RepositoryCardList } from "components/github/RepositoryCardList";

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
                        <Col md={12}>
                            <RepositoryCardList repositories={counter.gitHub.repositories} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProjectsPage;
