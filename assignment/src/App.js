import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAddPage from "./components/ProductAddPage";
import ProductTable from "./components/ProductTable";
import axios from "axios";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
import { Button, Modal } from "react-bootstrap";
function App() {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Trạng thái đăng nhập
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [users, setUsers] = useState([]);

  // Lấy danh sách sản phẩm từ API khi ứng dụng khởi động
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  //Thêm sản phẩm mới
  const handleAdd = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    // Làm mới danh sách từ API để đồng bộ
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  };

  // Xóa sản phẩm
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
      setModalMessage("Xóa sản phẩm thành công!");
      setShowModal(true);
    } catch (error) {
      console.error("Error delete products:", error);
      setModalMessage("Lỗi khi xóa sản phẩm!");
      setShowModal(true);
    }
  };
  // Cập nhật sản phẩm
  const handleUpdate = async (updatedProduct) => {
    try {
      await axios.put(
        `http://localhost:3001/products/${updatedProduct.id}`,
        updatedProduct
      );
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data); // Cập nhật toàn cục từ API
    } catch (error) {
      console.error("Error updating products:", error);
    }
  };

  // Lấy danh sách người dùng từ API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3002/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  // Đăng nhập
  const login = () => {
    setIsAuthenticated(true); // Đăng nhập thành công
    setModalMessage("Đăng nhập thành công!");
    setShowModal(true);
  };

  // Đăng xuất
  const logout = () => {
    setIsAuthenticated(false); // Đăng xuất
    setModalMessage("Đăng xuất thành công!");
    setShowModal(true);
  };

  // Hiển thị thông báo lỗi đăng nhập
  const loginError = () => {
    // setIsAuthenticated(false); // Đăng nhập không thành công
    setModalMessage("Tên đăng nhập hoặc mật khẩu không đúng!");
    setShowModal(true);
  };
  // Bảo vệ các route yêu cầu đăng nhập
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <div className="bg-dark text-white min-vh-100 p-4">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  products={products}
                  isAuthenticated={isAuthenticated}
                  logout={logout}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  users={users}
                  fetchUsers={fetchUsers}
                  login={login}
                  isAuthenticated={isAuthenticated}
                  loginError={loginError}
                />
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <ProductAddPage onAdd={handleAdd} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/table"
              element={
                <ProtectedRoute>
                  <ProductTable products={products} onDelete={handleDelete} />
                </ProtectedRoute>
              }
            />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditProduct onUpdate={handleUpdate} />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            keyboard={true}
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              margin: "0",
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseModal}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Router>
  );
}

export default App;
