const initialState = {
    game: { platforms: [] },
    screen: { results: [] },
    isLoading: true,
};
// isLoading is basically a switch. Which is true on by default and as soon as a game detail loads up on the game card it is false as it has finished loading.

// isLoading ==> HomeScreen => true, GameCard => False

// Now we can use isLoading in our app to do whatever we want.

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};

export default detailReducer;
