// Quiz.js
import React, { useContext } from "react";
import { QuizzContext } from "./QuizzContext";
import { Container, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const {
    questions,
    userAnswers,
    setUserAnswers,
    isSubmitted,
    setIsSubmitted,
  } = useContext(QuizzContext);
  const navigate = useNavigate(); // Dùng để chuyển trang

  const handleAnswerClick = (questionIndex, answer) => {
    if (!isSubmitted) {
      setUserAnswers({
        ...userAnswers,
        [questionIndex]: answer,
      });
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    navigate("/result"); // Chuyển sang trang kết quả
  };

  const correctCount = Object.keys(userAnswers).filter(
    (index) => userAnswers[index] === questions[index].correctAnswer
  ).length;

  const handleRetry = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">React Quiz</h2>

      {questions.map((q, index) => (
        <Card key={index} className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Question {index + 1}</Card.Title>
            <Card.Text>{q.question}</Card.Text>
            <Row>
              {q.answers.map((ans, i) => (
                <Col xs={12} md={6} key={i} className="mb-2">
                  <Button
                    variant={
                      isSubmitted
                        ? ans === q.correctAnswer
                          ? "success"
                          : userAnswers[index] === ans
                          ? "danger"
                          : "outline-secondary"
                        : userAnswers[index] === ans
                        ? "primary"
                        : "outline-primary"
                    }
                    onClick={() => handleAnswerClick(index, ans)}
                    className="w-100"
                    disabled={isSubmitted}
                  >
                    {ans}
                  </Button>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      ))}

      <div className="text-center mt-4">
        {!isSubmitted ? (
          <Button variant="primary" onClick={handleSubmit}>
            Submit Quiz
          </Button>
        ) : (
          <>
            <Alert variant="info">
              You scored {correctCount} out of {questions.length}!
            </Alert>
            <Button variant="secondary" onClick={handleRetry}>
              Retry Quiz
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Quiz;
