function Questions({
  questionBank,
  currentQuestion,
  time,
  handleAnswerOptionClick,
}) {
  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questionBank.length}
        </div>
        <div className="question-text">
          {questionBank[currentQuestion].question}
        </div>
        <div className="question-text">Time left: {time}</div>
      </div>
      <div className="answer-section">
        {questionBank[currentQuestion].incorrect.map((answerOption) => (
          <button
            className={undefined}
            // key={answerOption.id}
            id={answerOption.id}
            onClick={(e) =>
              handleAnswerOptionClick(
                e,
                answerOption.alt,
                questionBank[currentQuestion].correct,
                questionBank[currentQuestion].incorrect
              )
            }
          >
            {answerOption.alt}
          </button>
        ))}
      </div>
    </>
  );
}

export default Questions;
