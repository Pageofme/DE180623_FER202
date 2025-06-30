import React, { useContext } from "react";
import { QuizzContext } from "../QuizzContext";
import { Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { questions, userAnswers } = useContext(QuizzContext);
  const navigate = useNavigate();

  const correctCount = Object.keys(userAnswers).filter(
    (index) => userAnswers[index] === questions[index].correctAnswer
  ).length;

  const handleRetry = () => {
    navigate("/quiz");
  };

  return (
    <Container className="text-center mt-4">
      <h2>Your Quiz Results</h2>
      <Alert variant="info" className="mt-4">
        You scored {correctCount} out of {questions.length}!
      </Alert>
      <Button variant="primary" onClick={handleRetry}>
        Review Quiz
      </Button>
    </Container>
  );
};

export default Result;
