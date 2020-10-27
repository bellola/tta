import './App.css';
import React from 'react';
import fixedQs from './questions';
import QuestionBox from './components/QuestionsBox'



class Welcome extends React.Component {
 state = {
    'questionBank':[],
  
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
  render() {
    console.log(this.state)
    return(
      <div>
        {
        //when only rendering contidionally to make sure we only render questions
        //when they are in state
        this.state.questionBank  && 
        this.state.questionBank.map(({question, correct, incorrect})=> 

        (<QuestionBox question={question} options={incorrect}/>)
        
        )}
        
      </div>
      
    ) 
  }
}

export default Welcome;
