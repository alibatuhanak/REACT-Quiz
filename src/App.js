import React, { useState, useContext, useEffect } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import Footer from "./Components/Footer";
import useSound from "use-sound";
import quizSound from "./sounds/quiz__game-loop.mp3";

import { QuizContext } from "./Helpers/Contexts";

function App() {
	const [gameState, setGameState] = useState("menu");
	const [score, setScore] = useState(0);

	const [play] = useSound(quizSound, {
		volume: 0.4,
		interrupt: true,
		loop: true,
	});

	useEffect(() => {
		setTimeout(() => {
			play();
		}, 10);
	}, [play]);
	
	return (
		<div className="App">
			<QuizContext.Provider
				value={{ gameState, setGameState, score, setScore, play }}
			>
				{gameState === "menu" && <MainMenu />}
				{gameState === "quiz" && <Quiz />}
				{gameState === "endScreen" && <EndScreen />}
			</QuizContext.Provider>
			<Footer />
		</div>
	);
}

export default App;
