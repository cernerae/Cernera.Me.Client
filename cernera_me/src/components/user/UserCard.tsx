import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Gravatar from "react-gravatar";
import { Dropdown } from 'react-bootstrap';
import generalStyles from 'components/General.module.scss';
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
    const path = `/${keyName}`;

    const handleOnClick = (event: any) => {
        event.preventDefault();
        setCardClicked(true);
        history.push(to);
    }

    return (
        <Card id={`UserCard${keyName}`} className={["shadow"].join(' ')}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{displayName}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <a href={path}>
                        <Button variant="primary">Take me there</Button>
                    </a>
                </small>
            </Card.Footer>
        </Card>
    );
}

export default UserCard;
