	import React, {Component} from 'react';
import qb from './questions'

class App extends Component {


    state={
        questionBank:[],
        currentQuestion: 0,
        showScore: false,
        score: 0,
        color: undefined
    }

    getQuestions = () => {
      qb().then( question => {
        this.setState({
          questionBank: question
        })
      })
    }

    componentDidMount(){
      this.getQuestions()
      console.log(this.state.questionBank, "HEYOOOOOO")
    }


	 handleAnswerOptionClick = (e, answer, correct) => {


    if (answer === correct) {
    //   setScore(score + 1);
      this.setState({score:this.state.score+1})
      e.target.className = 'correct'
      setTimeout(() => e.target.className = undefined, 650);

    }
    
    if(answer !== correct){
      e.target.className = 'incorrect'
      setTimeout(() => alert(`The correct asnwer is ${correct}`),150)
      setTimeout(() => e.target.className = undefined, 650)
    }
   
    
    const nextQuestion = this.state.currentQuestion + 1;

		if (nextQuestion < this.state.questionBank.length) {
        this.setState({currentQuestion:nextQuestion})
        // setCurrentQuestion(nextQuestion);
		} else {
            this.setState({showScore:true})
			// setShowScore(true);
		}
	};


  render(){

  return (
    
		<div className='app'>
      
          {(this.state.questionBank.length > 0 && this.state.showScore === false) ? (
                  <>
                    <div className='question-section'>
                      <div className='question-count'>
                        <span>Question {this.state.currentQuestion + 1}</span>/{this.state.questionBank.length}
                      </div>
                      <div className='question-text'>{this.state.questionBank[this.state.currentQuestion].question}</div>
                    </div>
                    <div className='answer-section' >
                      {this.state.questionBank[this.state.currentQuestion].incorrect
                      // .sort(() => Math.random() - 0.5)
                      .map((answerOption) => (
                        <button className={this.state.color} onClick={(e) => this.handleAnswerOptionClick(e, answerOption, this.state.questionBank[this.state.currentQuestion].correct)}>{answerOption}</button>
                      ))}
                    </div>
                  </>) : (
                     <div className='score-section'>
                     You scored {this.state.score} out of {this.state.questionBank.length}
                     <div>
                       <button onClick={()=>{this.setState({score:0}); this.setState({showScore:false}); this.setState({currentQuestion:0})  } }>Reset</button>
                     </div>
                   </div>
                  )
                }
		</div>
  );
  
  }
 
  

  
 
}


export default App