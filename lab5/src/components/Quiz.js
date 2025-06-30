import React, { useContext } from "react";
import { QuizzContext } from "../QuizzContext";
import { Container, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { questions, userAnswers, isSubmitted, dispatch } =
    useContext(QuizzContext);
  const navigate = useNavigate();

  const handleAnswerClick = (questionIndex, answer) => {
    if (!isSubmitted) {
      dispatch({
        type: "ANSWER",
        payload: { index: questionIndex, answer },
      });
    }
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT" });
    window.scrollTo(0, 0); // scroll lên đầu trang
    navigate("/result"); // chuyển sang trang kết quả
  };

  const handleRetry = () => {
    dispatch({ type: "RESET" });
  };

  const correctCount = Object.keys(userAnswers).filter(
    (index) => userAnswers[index] === questions[index].correctAnswer
  ).length;

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">React Quiz</h2>

      {!isSubmitted && (
        <Button
          variant="warning"
          className="mb-3"
          onClick={() => navigate("/add-question")}
        >
          ➕ Thêm câu hỏi mới
        </Button>
      )}

      {questions.map((q, index) => (
        <Card key={index} className="mb-4 shadow">
          <Card.Body>
            <Card.Title>
              Question {index + 1}{" "}
              {isSubmitted && userAnswers[index] === q.correctAnswer ? (
                <span style={{ color: "green", marginLeft: "10px" }}>✔</span>
              ) : isSubmitted ? (
                <span style={{ color: "red", marginLeft: "10px" }}>✘</span>
              ) : null}
            </Card.Title>
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
