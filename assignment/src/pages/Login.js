import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ users, fetchUsers, login, isAuthenticated, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(); // Fetch users khi component mount
  }, [fetchUsers]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidLogin = false;

    // Kiểm tra danh sách users
    users.forEach((user) => {
      if (username === user.username && password === user.password) {
        isValidLogin = true;
      }
    });

    if (isValidLogin) {
      login(); // Cập nhật isAuthenticated thành true
      navigate("/"); // Chuyển hướng sau khi đăng nhập thành công
    } else {
      loginError(); // Hiển thị lỗi nếu không khớp
    }
  };

  return (
    <div className="bg-dark text-white p-4 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4">Login</h2>
        <div
          className="bg-dark p-4 rounded mb-4"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
