import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { QuizzContext } from "../QuizzContext";

const QuestionInput = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const { dispatch } = useContext(QuizzContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (
      question.trim() &&
      answers.every((a) => a.trim()) &&
      answers.includes(correctAnswer)
    ) {
      dispatch({
        type: "ADD_QUESTION",
        payload: {
          question,
          answers,
          correctAnswer,
        },
      });

      // Reset form và quay lại
      setQuestion("");
      setAnswers(["", "", ""]);
      setCorrectAnswer("");
      navigate("/");
    } else {
      alert("Vui lòng nhập đầy đủ và đảm bảo đáp án đúng nằm trong danh sách.");
    }
  };

  return (
    <Card className="mx-auto mt-4" style={{ maxWidth: 500 }}>
      <Card.Body>
        <Card.Title>Thêm câu hỏi mới</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Câu hỏi</Form.Label>
            <Form.Control
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Nhập câu hỏi"
            />
          </Form.Group>
          {answers.map((ans, idx) => (
            <Form.Group className="mb-3" key={idx}>
              <Form.Label>Đáp án {idx + 1}</Form.Label>
              <Form.Control
                value={ans}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[idx] = e.target.value;
                  setAnswers(newAnswers);
                }}
                placeholder={`Đáp án ${idx + 1}`}
              />
            </Form.Group>
          ))}
          <Form.Group className="mb-3">
            <Form.Label>
              Đáp án đúng (phải trùng 1 trong các đáp án trên)
            </Form.Label>
            <Form.Control
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              placeholder="Đáp án đúng"
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={handleAdd}>
              Thêm câu hỏi
            </Button>
            <Button variant="secondary" onClick={() => navigate("/")}>
              Quay lại
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default QuestionInput;
