const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            // Here we are assigning what we got from dispatch to our state
            return { ...state, popular: action.payload.popular };
        default:
            return { ...state };
    }
};

export default gamesReducer;
