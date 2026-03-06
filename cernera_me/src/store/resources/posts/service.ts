import log from "loglevel";

export const getPosts = () => {
    return fetch("/api/posts/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            log.debug("Posts response: " + JSON.stringify(json));
            return json;
        });
};
