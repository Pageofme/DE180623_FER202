import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../redux/quizSlice";

function Quiz() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);

  return (
    <div className="container">
      <h2 className="text-center bg-dark text-white p-3 rounded">
        JavaScript Quiz
      </h2>
      {questions.map((q, index) => (
        <div key={q.id} className="my-4 p-3 border rounded shadow-sm">
          <h5>
            <strong>Q.{index + 1}</strong> {q.question}
          </h5>
          <div className="row">
            {q.options.map((opt) => (
              <div key={opt} className="col-md-6 my-1">
                <label className="btn btn-outline-primary w-100 text-start">
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    checked={userAnswers[q.id] === opt}
                    onChange={() =>
                      dispatch(selectAnswer({ questionId: q.id, answer: opt }))
                    }
                    className="me-2"
                  />
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <a href="/review" className="btn btn-info me-2">
          Quiz Review
        </a>
        <a href="/result" className="btn btn-primary">
          Submit
        </a>
      </div>
    </div>
  );
}

export default Quiz;
