import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
    // Here we want to start up with "LOADING_DETAIL" before everything

    dispatch({
        type: "LOADING_DETAIL",
    });

    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data,
        },
    });
};
