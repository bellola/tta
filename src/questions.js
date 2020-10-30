function Questions({ questionBank, currentQuestion, handleAnswerOptionClick }) {
  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questionBank.length}
        </div>
        <div className="question-text">
          {questionBank[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {questionBank[currentQuestion].incorrect
          .sort(() => Math.random() - 0.5)
          .map((answerOption) => (
            <button
              className={undefined}
              onClick={(e) =>
                handleAnswerOptionClick(
                  e,
                  answerOption,
                  questionBank[currentQuestion].correct
                )
              }
            >
              {answerOption}
            </button>
          ))}
      </div>
    </>
  );
}

export default Questions;
