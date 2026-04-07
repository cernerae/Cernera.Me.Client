import log from "loglevel";
import { SendContactEmailRequestType } from "./type";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";

export const sendContactEmail = (request: SendContactEmailRequestType) => {
    return fetch(`${API_BASE}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request.body)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            log.debug("Contact response: " + JSON.stringify(json));
            return json;
        });
};