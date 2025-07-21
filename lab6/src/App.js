import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import QuizReview from "./components/QuizReview";
import QuizResult from "./components/QuizResult";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
                <a class="nav-link" href="#">
                  News
                </a>
                <a class="nav-link" href="/">
                  Quiz
                </a>
                <a class="nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/review" element={<QuizReview />} />
          <Route path="/result" element={<QuizResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
