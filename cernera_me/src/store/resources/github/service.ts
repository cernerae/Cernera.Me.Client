import { GetGitHubRepositoriesRequestType } from "./type";

export const getRepositories = (request: GetGitHubRepositoriesRequestType) => {
    console.info(`Getting repositories for ${request.username}. Request: %o`, request);
    const GET_REPOSITORIES_API_ENDPOINT = `https://api.github.com/users/${request.username}/repos`;
    const parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': `application/vnd.github.nebula-preview+json`
        }
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