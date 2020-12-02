// This compoents will open up when we click on a particular game card from the home screen grid.

// It will contain all the data of the game that we clicked on and the screenshots

import React from "react";
// Styling And Animation
import { motion } from "framer-motion";
import styled from "styled-components";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  // exitDetailHandler allows us to go back to the main page when we click on the shadow.
  const exitDetailHandler = (e) => {
    // Here const element tracks where in the app we are clicking
    const element = e.target;

    // Shadow => dark area around the game card
    if (element.classList.contains("shadow")) {
      // If we click on the shadow around the box then turn on the scrolling funciton on the main page as we are on the main page.
      document.body.style.overflow = "auto";
      // The link up top would change to this "/" which is the home link
      // This is just like an anchor tag like <Link to="/kdsjfdkjh"></Link>
      history.push("/");
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  // We are basically telling the Card to wait until the isLoading turns false.
  // Logic => As soon as it stops loading, show the game details card.
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="ratings">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {/* Here game.platform gives out the platform data. Then we map over that data to use it the way we want. */}
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(
                        // data.platform.name returns us the platform name from the API

                        data.platform.name
                      )}></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={smallImage(game.background_image, 1280)}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  z-index: 10;

  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
