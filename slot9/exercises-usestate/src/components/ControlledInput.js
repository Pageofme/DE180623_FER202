import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <Container className="mt-5 text-white">
      <Form className="d-flex justify-content-center">
        <Form.Group controlId="formBasicInput">
          <Form.Control
            type="text"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mb-3 "
          />
        </Form.Group>
      </Form>
      <h3>Input text: {text}</h3>
    </Container>
  );
}

export default ControlledInput;
