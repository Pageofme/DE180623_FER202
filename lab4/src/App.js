import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./components/QuizzContext";
import Quiz from "./components/Quizz";
import Result from "./components/Result"; // Tạo thêm trang Result
import { Container } from "react-bootstrap";

function App() {
  return (
    <QuizProvider>
      <Router>
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/result" element={<Result />} /> {/* Trang kết quả */}
          </Routes>
        </Container>
      </Router>
    </QuizProvider>
  );
}

export default App;
