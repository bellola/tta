import React, { useState} from 'react';
import fixedQs from './questions'

export default function App() {



  let questions = fixedQs()
 
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [color, setColor] = useState(undefined)




	const handleAnswerOptionClick = (e, answer, correct) => {

    if (answer === correct) {
      setScore(score + 1);
      e.target.className = 'correct'
      setTimeout(() => e.target.className = undefined, 1000);

    }
    
    if(answer !== correct){
      e.target.className = 'incorrect'
      setTimeout(() => e.target.className = undefined, 1000)
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
          <div>
            <button onClick={()=>{setScore(0); setShowScore(false); questions=fixedQs(); setCurrentQuestion(0)}}>Reset</button>
            {/* <link href="#" onClick={(event) => { func1(event); func2();}}>Trigger here</link> */}
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
						{questions[currentQuestion].incorrect.sort(() => Math.random() - 0.5).map((answerOption) => (
							<button className={color} onClick={(e) => handleAnswerOptionClick(e, answerOption, questions[currentQuestion].correct)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}