import React, { useState } from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchFilter() {
  const items = ["Apple", "Banana", "Orange", "Mango"];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-5" style={{ width: "30%" }}>
      <Form.Group className="mb-3" controlId="searchInput">
        <Form.Label>Search Fruits</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>

      <ListGroup>
        {filteredItems.map((item, i) => (
          <ListGroup.Item key={i}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default SearchFilter;
