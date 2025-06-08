import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./menu.css";

// Component cho từng món
function MenuItem({ ribbonText, imgSrc, title, oldPrice, newPrice }) {
  return (
    <Col md={3} className="position-relative mb-4">
      {ribbonText && (
        <div className="corner-ribbon bg-warning position-absolute text-black fw-bold px-2">
          {ribbonText}
        </div>
      )}
      <Card className="h-100">
        <Card.Img variant="top" src={imgSrc} alt={title} />
        <Card.Body className="d-flex flex-column text-start">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mb-3">
            {oldPrice && <del>${oldPrice.toFixed(2)}</del>}{" "}
            <span className="text-warning fw-bold">${newPrice.toFixed(2)}</span>
          </Card.Text>
          <div className="mt-auto">
            <Button variant="dark" className="w-100">
              Buy
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

// Danh sách menu
function Menu() {
  const menuItems = [
    {
      ribbonText: "SALE",
      imgSrc: "/menu1.jpg",
      title: "Margherita Pizza",
      oldPrice: 40.0,
      newPrice: 24.0,
    },
    {
      ribbonText: null,
      imgSrc: "/menu2.jpg",
      title: "Mushroom Pizza",
      oldPrice: null,
      newPrice: 25.0,
    },
    {
      ribbonText: "NEW",
      imgSrc: "/menu3.jpg",
      title: "Haiwaiian Pizza",
      oldPrice: null,
      newPrice: 30.0,
    },
    {
      ribbonText: "SALE",
      imgSrc: "/menu4.jpg",
      title: "Pesto Pizza",
      oldPrice: 50.0,
      newPrice: 30.0,
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-start mb-4">Our Menu</h2>
      <Row className="justify-content-center">
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
