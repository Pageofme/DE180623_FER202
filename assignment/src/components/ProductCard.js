import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={`/images/${product.image}`}
        style={{ height: "160px", objectFit: "contain", padding: "1rem" }}
        alt={product.image ? "Ảnh ${product.name}" : "Missing image"}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          style={{ fontSize: "1rem" }}
          className="text-danger fw-semibold"
        >
          {product.name}
        </Card.Title>
        <Card.Text className="flex-grow-1" style={{ fontSize: "0.9rem" }}>
          {product.description}
        </Card.Text>

        <div className="mt-auto w-100">
          <div className="mb-2 text-center">
            <div>
              <del className="text-muted">{product.price} đ</del>
            </div>
            <div className="text-danger fw-bold">{product.currentPrice} đ</div>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="mt-auto"
              variant="danger"
              size="sm"
              onClick={() => navigate(`/detail/${product.id}`)}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
