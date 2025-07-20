import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductForm from "./ProductForm";
import axios from "axios";
// Hàm định dạng số thành chuỗi với dấu chấm sau mỗi 3 số 0
const formatNumberWithDots = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function ProductAddPage({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = async (newProduct) => {
    try {
      // Chuyển đổi price và currentPrice thành chuỗi định dạng trước khi gửi
      const formattedProduct = {
        ...newProduct,
        price: formatNumberWithDots(newProduct.price),
        currentPrice: formatNumberWithDots(newProduct.currentPrice),
      };
      // Gửi yêu cầu POST đến API
      const response = await axios.post(
        "http://localhost:3001/products",
        formattedProduct
      );
      // Cập nhật state với sản phẩm mới từ API
      onAdd(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <h2 className="text-center mb-4">Add Product</h2>
      <div className="d-flex justify-content-between mb-3">
        <Button onClick={() => navigate("/")} variant="secondary">
          Back to List
        </Button>
        <Button onClick={() => navigate("/table")} variant="info">
          View Table
        </Button>
      </div>
      <ProductForm onAdd={handleAdd} />
    </>
  );
}
