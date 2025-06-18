import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
// import "../css/Question.css";
const Question = ({
  currentIndex,
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <Row className="mb-4 text-start">
      <Col xs={12} md={6}>
        <h1>Question {currentIndex}</h1>
        <h2>{question}</h2>
        <Table striped bordered hover className="custom-table">
          <tbody>
            {options.map((option, index) => (
              <tr key={index}>
                <td>
                  <a
                    className="answer-button" // Áp dụng lớp CSS custom
                    onClick={() => onSelectAnswer(option)}
                  >
                    {option}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>Selected Answer: {selectedAnswer}</p>
      </Col>
    </Row>
  );
};

export default Question;
