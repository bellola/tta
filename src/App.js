import React, { Component } from "react";
import qb from "./qns";
import Questions from "./Questions";
import Score from "./Score";

class App extends Component {
  state = {
    questionBank: [],
    currentQuestion: 0,
    showScore: false,
    score: 0,
  };
  //resets everything
  resetApp = () => {
    this.setState({ score: 0 });
    this.setState({ showScore: false });
    this.setState({ currentQuestion: 0 });
    this.getQuestions();
  };

  //this class methods takes the value from the promise and sets it to state
  getQuestions = () => {
    qb().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  //here we call getQuestions when the component is first rendering
  componentDidMount() {
    this.getQuestions();
  }
  //gets triggered when an option is picked by the user
  handleAnswerOptionClick = (e, answer, correct) => {
    
    //if correct the option button turns green to   give user feed back and score gets incremented+=1
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 });
      e.target.className = "correct";
      setTimeout(() => (e.target.className = undefined), 500);
    }
    //if incorrect button turns red and an alert gets trigered to indicate the user the correct answer
    if (answer !== correct) {
      e.target.className = "incorrect";
      setTimeout(() => alert(`The correct asnwer is ${correct}`), 150);
      setTimeout(() => (e.target.className = undefined), 650);
    }
    //if the question index is less than the number of questions we move to next question otherwise we show score
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questionBank.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ showScore: true });
    }
  };

  //we conditionaly render depending on state
  render() {
    return (
      <div className="app">
        {this.state.questionBank.length > 0 &&
        this.state.showScore === false ? (
          <Questions
            currentQuestion={this.state.currentQuestion}
            questionBank={this.state.questionBank}
            handleAnswerOptionClick={this.handleAnswerOptionClick}
          />
        ) : (
          <Score
            score={this.state.score}
            questionBank={this.state.questionBank}
            resetApp={this.resetApp}
          />
        )}
      </div>
    );
  }
}

export default App;
