import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function LaptopList() {
    const [laptops, setLaptops] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/Laptops")
            .then(res => setLaptops(res.data));
    }, []);

    const filtered = laptops.filter(l =>
        l.brand.toLowerCase().includes(search.toLowerCase()) ||
        l.model.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <h2 className="my-4 justify-content-center d-flex">Laptop List</h2>
            <Form.Control
                placeholder="Search by name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="mb-4"
            />

            <Row className="g-4">
                {filtered.map(l => (
                    <Col key={l.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="h-100 d-flex flex-column justify-content-between">
                            <Card.Img variant="top" src={l.image} style={{ height: "200px", objectFit: "cover" }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{l.brand} {l.model}</Card.Title>
                                <Card.Text>Year: {l.year}<br />Price: {l.price}</Card.Text>
                                <div className="mt-auto">
                                    <Link to={`/laptops/${l.id}`}>
                                        <Button variant="primary" className="w-100">View Details</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LaptopList;
