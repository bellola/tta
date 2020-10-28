
import React, { useState } from 'react';
import fixedQs from './questions'

export default function App() {

	//
	let questions = fixedQs

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [isCorrect, setColor] = useState(false)

	

	const handleAnswerOptionClick = (answer, correct) => {
    questions.forEach(q =>
      console.log(q.id))
		if (answer === correct) {
			setScore(score + 1);
			alert(`CORRECT! way to go!`)
		}

		if(answer !== correct){
			alert(`NOPE, the correct answer was: ${correct}`)
		}

		

	   const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].incorrect.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption, questions[currentQuestion].correct)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}