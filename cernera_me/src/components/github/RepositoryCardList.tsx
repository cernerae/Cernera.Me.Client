import React from 'react';
import { Container, Card } from "react-bootstrap";
import { GitHubRepository } from "../../types/index";

export const RepositoryCardList = ({ repositories }: { repositories: GitHubRepository[] }) => {

    const cards = repositories ? (repositories.map(repo => <Card>{repo.name}</Card>)) : null;

    return (
        <div id="RepositoryCardList">
            <div>
                <Container>
                    {cards}
                </Container>
            </div>
        </div>
    );
}

export default RepositoryCardList;
