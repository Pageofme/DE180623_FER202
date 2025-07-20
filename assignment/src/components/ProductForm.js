import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import useFormValidation from "../hooks/useFormValidation";

// Hàm định dạng số thành chuỗi với dấu chấm sau mỗi 3 số 0
const formatNumberWithDots = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function ProductForm({ onAdd }) {
  const initialValues = {
    name: "",
    description: "",
    price: "",
    currentPrice: "",
  };
  const {
    form,
    error,
    handleChange,
    validateForm,
    getValidatedProduct,
    setForm,
  } = useFormValidation(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const validatedProduct = getValidatedProduct();
      // Chuyển đổi thành chuỗi định dạng trước khi gửi
      const formattedProduct = {
        ...validatedProduct,
        id: Date.now().toString(),
        price: formatNumberWithDots(validatedProduct.price),
        currentPrice: formatNumberWithDots(validatedProduct.currentPrice),
      };
      onAdd(formattedProduct);
      setForm(initialValues);
    }
  };
  return (
    <div className="bg-dark text-white p-4 rounded mb-4">
      <h4 className="text-center mb-3">Add Product</h4>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2 row">
          <Form.Label className="col-sm-2 col-form-label">Name:</Form.Label>
          <div className="col-sm-10">
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-2 row">
          <Form.Label className="col-sm-2 col-form-label">
            Description:
          </Form.Label>
          <div className="col-sm-10">
            <Form.Control
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-2 row">
          <Form.Label className="col-sm-2 col-form-label">Price:</Form.Label>
          <div className="col-sm-10">
            <Form.Control
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 row">
          <Form.Label className="col-sm-2 col-form-label">
            Current Price:
          </Form.Label>
          <div className="col-sm-10">
            <Form.Control
              name="currentPrice"
              value={form.currentPrice}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="primary">
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
}

ProductForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

ProductForm.defaultProps = {
  onAdd: () => {},
};
