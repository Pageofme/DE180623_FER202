import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LaptopList from "./components/LaptopList";
import LaptopDetail from "./components/LaptopDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route path="/laptops" element={<LaptopList />} />
        <Route path="/laptops/:id" element={<LaptopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
