import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Alert } from "react-bootstrap";
import useFormValidation from "../hooks/useFormValidation";

// Hàm định dạng số thành chuỗi với dấu chấm sau mỗi 3 số 0
const formatNumberWithDots = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const EditProduct = ({ onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const initialValues = {
    name: "",
    description: "",
    price: "",
    currentPrice: "",
  };
  const {
    form: editedProduct,
    error,
    setError,
    handleChange,
    validateForm,
    getValidatedProduct,
    setForm,
  } = useFormValidation(initialValues);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
        setForm(response.data); // Đặt giá trị ban đầu từ API
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id, setForm]);

  const handleSave = async () => {
    if (validateForm()) {
      try {
        const validatedProduct = getValidatedProduct();
        // Chuyển đổi price và currentPrice thành chuỗi định dạng trước khi gửi
        const formattedProduct = {
          ...validatedProduct,
          price: formatNumberWithDots(validatedProduct.price),
          currentPrice: formatNumberWithDots(validatedProduct.currentPrice),
        };
        await axios.put(
          `http://localhost:3001/products/${id}`,
          formattedProduct
        );
        if (onUpdate) onUpdate(formattedProduct); // Gọi hàm onUpdate từ App.js với dữ liệu định dạng
        navigate(`/detail/${id}`);
      } catch (error) {
        console.error("Error updating product:", error);
        setError("Lỗi khi cập nhật sản phẩm: " + error.message); // Hiển thị lỗi nếu có
      }
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="bg-dark text-white p-4 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4">Edit Product</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="bg-dark p-4 rounded mb-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                name="name"
                value={editedProduct.name || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                name="description"
                value={editedProduct.description || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                name="price"
                value={editedProduct.price || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Current Price:</Form.Label>
              <Form.Control
                name="currentPrice"
                value={editedProduct.currentPrice || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" onClick={handleSave}>
                Save Product
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate(`/detail/${id}`)}
                className="ms-2"
              >
                Back
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
