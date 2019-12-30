export const loadUsers = () => {

    return fetch("www.google.com")
        .then(response => {
            if (response.ok) {
                console.debug("GOOD GET!")
            } else {
                console.warn("BAD GET!")
            }
            return response.json();
        })
        .then(json => {
            return json;
        });

}