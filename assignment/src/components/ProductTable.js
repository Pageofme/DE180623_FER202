// import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
export default function ProductTable({ products, onDelete }) {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    setProductIdToDelete(id);
    setShowConfirmModal(true);
  };
  const handleConfirmDelete = () => {
    if (productIdToDelete) {
      onDelete(productIdToDelete);
    }
    setShowConfirmModal(false);
    setProductIdToDelete(null);
  };
  const handleCancelDelete = () => {
    setShowConfirmModal(false);
    setProductIdToDelete(null);
  };
  return (
    <>
      <h2 className="text-center mb-4">Product Table</h2>

      <div className="d-flex justify-content-between mb-3">
        <Button onClick={() => navigate("/")} variant="secondary">
          Back to List
        </Button>
        <Button onClick={() => navigate("/add")} variant="success">
          Add Product
        </Button>
      </div>

      <Table striped bordered hover variant="light" responsive>
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Current Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price} đ</td>
              <td>{p.currentPrice} đ</td>
              <td className="text-center">
                <Button
                  className="mb-1"
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteClick(p.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate(`/edit/${p.id}`)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        show={showConfirmModal}
        onHide={handleCancelDelete}
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          margin: "0",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc muốn xóa sản phẩm này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
