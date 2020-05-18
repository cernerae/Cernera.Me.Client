import { SendContactEmailRequestType } from "./type";

export const sendContactEmail = (request: SendContactEmailRequestType) => {
    const GET_REPOSITORIES_API_ENDPOINT = `http://localhost:3001/api/email/sendEmail`;
    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.body)
    };

    return fetch(GET_REPOSITORIES_API_ENDPOINT, parameters)
        .then(response => {
            if (response.ok) {
                console.info("GOOD GET!")
            } else {
                console.warn("BAD GET!")
            }
            return response.json();
        })
        .then(json => {
            console.debug("Returning JSON: " + JSON.stringify(json));
            return json;
        });
};