import { jokeList } from "./feed/jokeList.js";
import {getJoke} from "./data/dataManager.js";


const showJokeList = () => {
    const jokeElement = document.querySelector(".jokes")
    getJoke().then((allJokes) => {
        jokeElement.innerHTML = jokeList(allJokes);
    })
}

showJokeList();