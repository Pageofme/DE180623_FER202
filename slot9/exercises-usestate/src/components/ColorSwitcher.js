import React, { useState } from "react";
import { Container, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ColorSwitcher() {
  const [color, setColor] = useState("white");

  return (
    <Container className="mt-5" style={{ width: "20%" }}>
      <Form>
        <Form.Group controlId="colorSelect">
          <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="white">Select a color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Card
        className="mt-4 text-center"
        style={{ backgroundColor: color, height: "100px", lineHeight: "100px" }}
      ></Card>
    </Container>
  );
}

export default ColorSwitcher;
