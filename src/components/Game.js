import React from "react";
// Styling And Animation
import { motion } from "framer-motion";
import styled from "styled-components";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
	const stringPathId = id.toString();

	// Load Details
	const dispatch = useDispatch();
	// Everytime we click on a game here, we want to execute this function that will load up the deatil of that game.
	const loadDetailHandler = () => {
		// This removes the ability to scroll on the main page. We want this so that the page does not scroll when a game card is open.
		// We will turn it on from GameDetail.js
		document.body.style.overflow = "hidden";

		// We need id for loadDetail to work. We get the id from the Home.js where we pass down the id as the prop.
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				{/* We want the link to change to `/game/${id}` when we click on any of the game card where id is the id of that particular game. */}
				{/* We have access to the id from the prop above so we can do this. */}
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;
`;

export default Game;
