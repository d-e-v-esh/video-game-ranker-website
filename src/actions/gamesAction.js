import axios from "axios";
import { popularGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
    // Fetch Axios
    const popularData = await axios.get(popularGamesURL());

    // We have an array called popular in the state, we just put fetched popular data in our popular state through dispatch.
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData,
        },
    });
};
