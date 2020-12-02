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
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
