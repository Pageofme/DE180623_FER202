// Result.js
import React, { useContext } from "react";
import { QuizzContext } from "./QuizzContext";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { questions, userAnswers } = useContext(QuizzContext);
  const navigate = useNavigate();

  const correctCount = Object.keys(userAnswers).filter(
    (index) => userAnswers[index] === questions[index].correctAnswer
  ).length;

  const handleReview = () => {
    navigate("/"); // Quay lại trang Quiz để xem lại câu trả lời
  };

  return (
    <div className="text-center">
      <h2>Your Quiz Results</h2>
      <Alert variant="info" className="mt-4">
        You scored {correctCount} out of {questions.length}!
      </Alert>
      <Button variant="primary" onClick={handleReview}>
        Review Answers
      </Button>
    </div>
  );
};

export default Result;
