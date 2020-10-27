import './App.css';
import React from 'react';
import fixedQs from './questions';
import QuestionBox from './components/QuestionsBox'



class Welcome extends React.Component {
  //initialize state with questions and score
 state = {
    'questionBank':[],
    'score': 0,
    'responses': 0
  }
  //component method tha calls fixedQs and sets questions to state
  getQuestions = () => {
    fixedQs().then(question => {
      this.setState({
        questionBank: question
      })
    })
  }
  //call get questions when component mounts
  componentDidMount(){
    this.getQuestions()
  }
  //check if answer matches the correct answer
  computeAnswer(answer, correctAnswer){
    if(answer === correctAnswer){
      this.setState({
        score:this.state.score + 1
      })
    }
    this.setState({
      responses: this.state.responses + 1
    })
    console.log('responses', this.state.responses)
  }


  render() {
    console.log(this.state)
    return(
    
      <div>
        {
        //when only rendering contidionally to make sure we only render questions
        //when they are in state
        this.state.questionBank  && 
        this.state.responses < 10 &&
        this.state.questionBank.map(({question, correct, incorrect, id})=> 

        (<QuestionBox 
          question={question} 
          options={incorrect} 
          key={id}
          selected={answer => this.computeAnswer(answer, correct)}/>)
          
        
        )}
        <h3>{this.state.responses}</h3>
        
      </div>
      
    ) 
  }
}

export default Welcome;
