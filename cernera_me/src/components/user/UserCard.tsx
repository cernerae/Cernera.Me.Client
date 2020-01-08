import React, { useState } from 'react';
import { Redirect, withRouter, useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Gravatar from "react-gravatar";
import { Dropdown } from 'react-bootstrap';
import styles from './UserCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "icons";
import { url } from 'inspector';
import { setTimeout } from 'timers';

type UserCardProps = {
    keyName: string,
    displayName: string,
    description: string,
    image: string,
    to: string
}

const UserCard = ({ keyName, displayName, description, image, to }: UserCardProps) => {

    const [cardClicked, setCardClicked] = useState(false);
    let history = useHistory();

    const yeet = cardClicked ? styles["hide-me"] : styles["show-me"];

    const handleOnClick = (event: any) => {
        event.preventDefault();
        setCardClicked(true);
        setTimeout(() => history.push(to), 2000);
    }

    return (
        <Card id={`UserCard${keyName}`} className={[yeet, "shadow"].join(' ')}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{displayName}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <Button variant="primary" onClick={handleOnClick}>Take me there</Button>
                </small>
            </Card.Footer>
        </Card>
    );
}

export default UserCard;
