import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GameDetail from "../components/GameDetail";
// Styling And Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
// Components and Actions
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
// Redux
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // Get the current location
  const location = useLocation();

  // We will split the pathname by "/". This will return an array like ["", "game", "34534"]
  const pathId = location.pathname.split("/")[2];
  // 2 here will return the game id.

  console.log(location);

  // Here we are dispatching loadGames as the website renders on the screen. loadGames contains the dispatch actions which will trigger the gamesReducer that contains our (action.type : "FETCH_GAMES") that returns us the state of popular games.

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());

    // This means, useEffect is only going to run when we dispatch
  }, [dispatch]);

  // Here we are extracting something specific from redux with destructuring. This is the same as the import statements.
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {/* We are adding the GameDetail inside the GameList like a pop-up. */}

      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {/* The above line says that if game id is available then show the game card otherwise do not show */}

        {/* If searched.length is truthy then show the searched container otherwise hide  */}
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem, 5rem;
  h2 {
    padding: 5rem, 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid; // This just creates a grid
  /* get everything in column, repeat and auto-fit */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  /* minmax(500px, 1fr) => 500 should be the minimum space it should take on the screen, if there is not enough space then => 1fr => take as much space as you can */
  /* If there is not enough space, expand it. */

  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
