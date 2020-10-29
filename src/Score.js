function Questions({ score, questionBank, resetApp }) {
  return (
    <div className="score-section">
      You scored {score} out of {questionBank.length}
      <div>
        <button
          onClick={() => {
            resetApp();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Questions;
