import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Chuyển đổi thành chuỗi để hiển thị, tránh lỗi replace
  const priceStr = (product.price || "0").toString();
  const currentPriceStr = (product.currentPrice || "0").toString();
  const priceNumber = parseInt(priceStr.replace(/\./g, ""), 10) || 0;
  const currentPriceNumber =
    parseInt(currentPriceStr.replace(/\./g, ""), 10) || 0;
  const discount =
    priceNumber > 0
      ? (((priceNumber - currentPriceNumber) / priceNumber) * 100).toFixed(0)
      : 0;

  return (
    <div className="bg-dark text-white p-4 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4">{product.name}</h2>
        <div className="text-center mb-4">
          <img
            src={`/images/${product.image}`}
            alt={product.image ? `Ảnh ${product.name}` : "Missing image"}
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="text-center mb-4">
          <p>{product.description}</p>
          <p>
            Price: <del>{priceStr} đ</del>
          </p>
          <p>
            Current Price: <strong>{currentPriceStr} đ</strong>
          </p>
          <p>
            Discount: <strong>{discount}%</strong>
          </p>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back Home
          </Button>
          <Button
            variant="danger"
            onClick={() => navigate(`/edit/${id}`)}
            className="ms-2"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
