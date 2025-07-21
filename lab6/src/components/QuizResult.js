import React from "react";
import { useSelector } from "react-redux";

function QuizResult() {
  const questions = useSelector((state) => state.quiz.questions);

  return (
    <div className="container text-center">
      <h2 className="bg-dark text-white p-3 rounded">Quiz Review</h2>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className="card m-2 bg-success-subtle p-3 text-center"
          >
            <p>
              <strong>Question No {index + 1}</strong>
            </p>
            <span className="text-success fw-bold">Answered</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <a href="/" className="btn btn-info me-2">
          Quiz
        </a>
        <a href="/review" className="btn btn-warning me-2">
          Quiz Review
        </a>
      </div>
    </div>
  );
}

export default QuizResult;
