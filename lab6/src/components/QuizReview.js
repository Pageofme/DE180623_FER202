import React from "react";
import { useSelector } from "react-redux";

function QuizReview() {
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);

  return (
    <div className="container">
      <h2 className="text-center bg-dark text-white p-3 rounded">
        Quiz Review
      </h2>
      {questions.map((q, index) => {
        const isCorrect = userAnswers[q.id] === q.correctAnswer;
        return (
          <div
            key={q.id}
            className={`p-3 my-3 rounded shadow-sm ${
              isCorrect ? "bg-success-subtle" : "bg-danger-subtle"
            }`}
          >
            <h5>
              <strong>Q{index + 1}.</strong> {q.question}
            </h5>
            <div className="ms-3">
              {q.options.map((opt) => (
                <div key={opt}>
                  <input
                    type="radio"
                    disabled
                    checked={userAnswers[q.id] === opt}
                    className="me-2"
                  />
                  {opt}
                </div>
              ))}
              <p className="mt-2">
                <strong>Right answer is:</strong> {q.correctAnswer}
              </p>
            </div>
          </div>
        );
      })}
      <a href="/" className="btn btn-info me-2">
        Quiz
      </a>
      <a href="/result" className="btn btn-success">
        View Result
      </a>
    </div>
  );
}

export default QuizReview;
