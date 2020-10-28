import React, { useState } from 'react';
import fixedQs from './questions'

export default function App() {

	//
	let questions = fixedQs

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [color, setColor] = useState(undefined)
  // const selectedAnswer = useRef()

	

	const handleAnswerOptionClick = (e, answer, correct) => {
    
    console.log(answer)

    
		if (answer === correct) {
      setScore(score + 1);
      e.target.className = 'correct'
			// alert(`CORRECT! way to go!`)
		}

		if(answer !== correct){
      // setColor('incorrect')
      e.target.className = 'incorrect'
      setTimeout(() => alert(`NOPE, the correct answer was: ${correct}`), 500);
			
		}

		

	   const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
      setTimeout(() => setCurrentQuestion(nextQuestion), 2000);
      setTimeout(() => e.target.className = undefined, 2000);
      
      // setColor(undefined)
		} else {
			setShowScore(true);
		}
	};



	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <div>
            <button>Reset</button>
          </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section' >
						{questions[currentQuestion].incorrect.map((answerOption) => (
							<button className={color} onClick={(e) => handleAnswerOptionClick(e, answerOption, questions[currentQuestion].correct)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}