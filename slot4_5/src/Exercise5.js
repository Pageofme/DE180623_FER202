import React, { useState } from "react";
import "./css/exercise5.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTty } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const studentsData = [
  {
    id: "DE160182",
    name: "Nguyễn Hữu Quốc Khánh",
    city: "DaNang",
    img: "../images/sv1.jpg", // Thay bằng link ảnh thật
  },
  {
    id: "DE160377",
    name: "Choy Vĩnh Thiện",
    city: "QuangNam",
    img: "../images/sv2.jpg",
  },
  {
    id: "DE160547",
    name: "Đỗ Nguyễn Phúc",
    city: "QuangNam",
    img: "../images/sv3.jpg",
  },
  {
    id: "DE170049",
    name: "Lê Hoàng Minh",
    city: "DaNang",
    img: "../images/sv4.jpg",
  },
];

function StudentCard({ student }) {
  const [status, setStatus] = useState("absent");

  const handleSubmit = () => {
    alert(
      `${student.name} (${student.id}) - Status: ${
        status === "present" ? "Present" : "Absent"
      }`
    );
  };

  return (
    <div className="card mb-4">
      <img src={student.img} className="card-img-top" alt={student.name} />
      <div className="card-body">
        <h6 className="card-title text-center">{student.id}</h6>
        <div className="d-flex justify-content-between mb-3">
          <p className="mb-0">{student.name}</p>
          <p className="mb-0">{student.city}</p>
        </div>
        <div className="d-flex justify-content-evenly gap-3 mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`status-${student.id}`}
              id={`absent-${student.id}`}
              value="absent"
              checked={status === "absent"}
              onChange={() => setStatus("absent")}
            />
            <label
              className="form-check-label"
              htmlFor={`absent-${student.id}`}
            >
              Absent
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`status-${student.id}`}
              id={`present-${student.id}`}
              value="present"
              checked={status === "present"}
              onChange={() => setStatus("present")}
            />
            <label
              className="form-check-label"
              htmlFor={`present-${student.id}`}
            >
              Present
            </label>
          </div>
        </div>
        <div className="cardBtn">
          <button className="btn w-20" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Exercise5() {
  return (
    <div>
      {/* Header */}
      <header className="p-3 text-white">
        <div className="container">
          {/* Logo and Search */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <img
              src="../images/logo.webp"
              alt="FPT University"
              className="logo"
              style={{ height: "50px" }}
            />

            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-flex gap-4">
                <a href="#" className="custom-link">
                  <i className="bi bi-house-door-fill me-1"></i> TRANG CHỦ
                </a>
                <a href="#" className="custom-link">
                  <i className="bi bi-book-fill me-1"></i> NGÀNH HỌC
                </a>
                <a href="#" className="custom-link">
                  <i className="bi bi-people-fill me-1"></i> TUYỂN SINH
                </a>
                <a href="#" className="custom-link">
                  <i className="bi bi-mortarboard-fill me-1"></i> SINH VIÊN
                </a>
              </div>
            </div>

            <form className="d-flex" role="search">
              <label>Search: </label>
              <input
                className="form-control"
                type="search"
                aria-label="Search"
                style={{ maxWidth: 200 }}
              />
            </form>
          </div>
        </div>
      </header>
      <section className="largeImg">
        <div>
          {/* Large Image */}
          <img
            src="../images/svFPT.jpg"
            alt="Group"
            className="img-fluid rounded image"
          />
        </div>
      </section>

      <section className="student container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              Students
            </li>
          </ol>
        </nav>

        {/* Student Details */}
        <h4 className="text-center mb-4">Students Detail</h4>
        <div className="row justify-content-center">
          {studentsData.map((student) => (
            <div className="col-md-6 " key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer
        className="text-white py-4"
        style={{ backgroundColor: "#f28333" }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row textFooter">
          <div>
            <h6>Our Address</h6>
            <p className="mb-0">Khu đô thị FPT Đà Nẵng</p>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p>:+84023111111</p>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTty} />
              <p>:+852 8765 4321</p>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <a style={{ textDecoration: "none" }} href="fptudn@fpt.edu.vn">
                :fptudn@fpt.edu.vn
              </a>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            {/* Social icons: you can add SVG or fontawesome */}
            <a href="#" className="text-white fs-4">
              <ion-icon name="logo-google"></ion-icon>
            </a>
            <a href="#" className="text-white fs-4">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="text-white fs-4">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="text-white fs-4">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className="text-white fs-4">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="#" className="text-white fs-4">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
        </div>
        <div className="text-center mt-3" style={{ color: "black" }}>
          © Copyright 2023
        </div>
      </footer>
    </div>
  );
}
