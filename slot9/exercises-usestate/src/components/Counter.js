import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Container>
        <Button variant="secondary mb-3" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <h2 className="text-white">Count: {count}</h2>
      </Container>
    </div>
  );
}

export default Counter;
