import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";
import { popularGamesURL } from "./api";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    });

    // Here we are dispatching loadGames as the website renders on the screen. loadGames contains the dispatch actions which will trigger the gamesReducer that contains our (action.type : "FETCH_GAMES") that returns us the state of popular games.
    //kdjfxhkdfjgh
    return (
        <div className="App">
            <h1>asdfkjh</h1>
        </div>
    );
}
console.log(popularGamesURL());

export default App;
