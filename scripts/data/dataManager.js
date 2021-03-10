export const getJoke = () => {
    return fetch("http://localhost:8088/joke")
        .then(response => response.json())
}