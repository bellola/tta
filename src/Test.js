// import React, { useState} from 'react';
// import questions from './questions'

// class App extends React.Component {


//     state={
//         questionBank:[],
//         currentQuestion: 0,
//         showScore: false,
//         score: 0,
//         color: undefined
//     }

// // 	const [currentQuestion, setCurrentQuestion] = useState(0);
// // 	const [showScore, setShowScore] = useState(false);
// // 	const [score, setScore] = useState(0);
// //   const [color, setColor] = useState(undefined)


//   // const getNewQs = () => {
//   //   questions = newQs()
//   // }

// 	handleAnswerOptionClick = (e, answer, correct) => {


//     if (answer === correct) {
//     //   setScore(score + 1);
//       this.setState({score:this.state.score+1})
//       e.target.className = 'correct'
//       setTimeout(() => e.target.className = undefined, 650);

//     }
    
//     if(answer !== correct){
//       e.target.className = 'incorrect'
//       setTimeout(() => alert(`The correct asnwer is ${correct}`),150)
//       setTimeout(() => e.target.className = undefined, 650)
//     }
   
    
//     const nextQuestion = this.state.currentQuestion + 1;

// 		if (nextQuestion < questions.length) {
//         this.setState({currentQuestion:nextQuestion})
//         // setCurrentQuestion(nextQuestion);
// 		} else {
//             this.setState({showScore:true})
// 			// setShowScore(true);
// 		}
// 	};






//   render(){




//     return (
    
// 		<div className='app'>
      
//       {showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
//           <div>
//             <button onClick={()=>{setScore(0); setShowScore(false); setCurrentQuestion(0)}}>Reset</button>
//           </div>
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].question}</div>
// 					</div>
// 					<div className='answer-section' >
//             {questions[currentQuestion].incorrect
//             // .sort(() => Math.random() - 0.5)
//             .map((answerOption) => (
// 							<button className={color} onClick={(e) => handleAnswerOptionClick(e, answerOption, questions[currentQuestion].correct)}>{answerOption}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
      
			
// 		</div>
// 	);
//   }
 
  

  
 
// }