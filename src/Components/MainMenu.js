import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

const MainMenu = () => {
	const { gameState, setGameState, play } = useContext(QuizContext);
	return (
		<div className="Menu">
			<img
				style={{ width: "300px" }}
				src="images/quiz_img.png"
				alt="img"
			/>
			<button
				className="button-53"
				onClick={() => {
					setGameState("quiz");
				}}
			>
				Start Quiz
			</button>
		</div>
	);
};

export default MainMenu;
