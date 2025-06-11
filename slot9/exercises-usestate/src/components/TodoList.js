// import React, { useState } from "react";

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, input]);
//       setInput("");
//     }
//   };

//   const deleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button  onClick={addTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, i) => (
//           <li key={i}>
//             {todo} <button onClick={() => deleteTodo(i)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  ListGroup,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1f26",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-start">
          {/* Nhập task bên trái */}
          <Col md={6}>
            <InputGroup className="mb-4">
              <Form.Control
                type="text"
                placeholder="Please input a Task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button variant="danger" onClick={addTodo}>
                Add Todo
              </Button>
            </InputGroup>
          </Col>

          {/* Danh sách todo bên phải */}
          <Col md={4}>
            <Card>
              <Card.Header className="text-center fw-bold">
                Todo List
              </Card.Header>
              <ListGroup variant="flush">
                {todos.map((todo, i) => (
                  <ListGroup.Item
                    key={i}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {todo}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteTodo(i)}
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TodoList;
