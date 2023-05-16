import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

const EndScreen = () => {
	const { score, setScore, setGameState } = useContext(QuizContext);

	const restartQuiz = () => {
		setScore(0);
		setGameState("menu");
	};

	return (
		<div className="EndScreen">
			<img
				style={{ width: "250px" }}
				src="images/end_img.png"
				alt="img"
			/>
			<h1>Quiz Finished</h1>
			<h3>
				{score} / {Questions.length}
			</h3>
			<button className="button-53" onClick={restartQuiz}>
				{" "}
				Restart Quiz{" "}
			</button>
		</div>
	);
};

export default EndScreen;
