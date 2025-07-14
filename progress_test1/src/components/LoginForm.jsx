
// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal, Button, Form, Alert } from "react-bootstrap";

function LoginForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    // const navigate = useNavigate();

    const handleLogin = async () => {
        // Check empty fields
        if (!username.trim() || !password.trim()) {
            setError("Username and password are required!");
            return;
        }

        try {
            const res = await axios.get(
                `http://localhost:3001/UserAccounts?username=${username}&password=${password}`
            );
            if (res.data.length > 0) {
                setUser(res.data[0]);
                setShow(true);
                // navigate("/laptops");
                setError("");
            } else {
                setError("Invalid username or password!");
            }
        } catch (err) {
            setError("An error occurred while logging in.");
        }
    };

    return (
        <div className="container">
            <h2 className="d-flex justify-content-center">Login</h2>
            <div className="d-flex justify-content-center mb-4">
                <Form className="border p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </Form>

                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Successful</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Welcome, {username}! Login successful!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" href="/laptops">
                            Go to Laptop List
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default LoginForm;
