import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
export default function ProductList({ products, isAuthenticated, logout }) {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-center mb-4">Product List</h2>
      {isAuthenticated ? (
        <>
          <div className="d-flex justify-content-end mb-3">
            <Button onClick={logout} variant="danger">
              Logout
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-end mb-3">
            <Button onClick={() => navigate("/login")} variant="danger">
              Login
            </Button>
          </div>
        </>
      )}
      <div className="d-flex justify-content-between mb-3">
        <Button onClick={() => navigate("/add")} variant="success">
          Add Product
        </Button>
        <Button onClick={() => navigate("/table")} variant="info">
          View Table
        </Button>
      </div>{" "}
      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
