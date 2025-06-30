import React from "react";
import { Card, Form } from "react-bootstrap";

function Question({ data }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{data.text}</Card.Title>
        <Form>
          {data.options.map((opt, idx) => (
            <Form.Check
              key={idx}
              type="radio"
              label={opt}
              name={`question-${data.id}`}
              id={`q${data.id}-opt${idx}`}
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Question;
