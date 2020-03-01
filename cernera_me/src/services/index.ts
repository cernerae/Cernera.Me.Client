import * as t from "types";

export const getRepositories = (request: t.GetGitHubRepositoriesRequestType) => {
    console.log("Submitting getRepositories() service...");
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