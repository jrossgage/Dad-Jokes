import { joke } from "./joke.js";

//ask about where 'allJokes' is coming from
export const jokeList = (allJokes) => {
    let jokeHTML = "";
    for(const jokeObj of allJokes) {
        jokeHTML += joke(jokeObj)
    }
    return jokeHTML
}