import log from "loglevel";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";

export const getPosts = () => {
    return fetch(`${API_BASE}/posts/`, {
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
