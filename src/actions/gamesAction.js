import axios from "axios";
import {
  newGamesURL,
  popularGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch Axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  // We have an array called popular in the state, we just put fetched popular data in our popular state through dispatch.
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
