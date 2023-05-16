import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

const Quiz = () => {
	const { score, setScore, setGameState } = useContext(QuizContext);

	const [currQuestion, setCurrQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState("");

	const nextQuestion = () => {
		if (Questions[currQuestion].answer === optionChosen) {
			setScore(prevScore => prevScore + 1);
		}
		setOptionChosen("");
		setCurrQuestion(currQuestion + 1);
	};

	const finishQuiz = () => {
		if (Questions[currQuestion].answer === optionChosen) {
			setScore(prevScore => prevScore + 1);
		}
		setGameState("endScreen");
	};

	return (
		<div className="Quiz">
			<div className="qst">
				<h1>{Questions[currQuestion].prompt}</h1>
			</div>
			<div className="options">
				<button
					className={
						optionChosen === "A" ? "active button-53" : "button-53"
					}
					onClick={() => setOptionChosen("A")}
				>
					{Questions[currQuestion].optionA}
				</button>
				<button
					className={
						optionChosen === "B" ? "active button-53" : "button-53"
					}
					onClick={() => setOptionChosen("B")}
				>
					{Questions[currQuestion].optionB}
				</button>
				<button
					className={
						optionChosen === "C" ? "active button-53" : "button-53"
					}
					onClick={() => setOptionChosen("C")}
				>
					{Questions[currQuestion].optionC}
				</button>
				<button
					className={
						optionChosen === "D" ? "active button-53" : "button-53"
					}
					onClick={() => setOptionChosen("D")}
				>
					{Questions[currQuestion].optionD}
				</button>
			</div>

			{currQuestion === Questions.length - 1 ? (
				<button className="button-53" onClick={finishQuiz}>
					Finish Quiz
				</button>
			) : (
				<button className="button-53" onClick={nextQuestion}>
					Next
				</button>
			)}
		</div>
	);
};

export default Quiz;
