import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/exercise4.css";

function Exercise4() {
  return (
    <div>
      {/* Header */}
      <header className=" py-3 text-center">
        <img
          src="../images/logoFPT.png"
          alt="FPT Education Logo"
          style={{ maxWidth: "250px" }}
          className="mb-2"
        />
        {/* <h3 className="text-white fw-bold">FPT UNIVERSITY</h3> */}
        <nav>
          <a href="#home" className="text-white mx-2 small">
            Home
          </a>
          <a href="#about" className="text-white mx-2 small">
            About
          </a>
          <a href="#contact" className="text-white mx-2 small">
            Contact
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="container mt-5">
        <section id="about" className="mb-5 text-center">
          <h4 className="fw-bold">About</h4>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact" className="mb-5 text-center">
          <h4 className="fw-bold">Contact</h4>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className=" text-center text-white py-3">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Exercise4;
