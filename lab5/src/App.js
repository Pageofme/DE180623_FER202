import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import News from "./components/News";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import About from "./components/About";
import Result from "./components/Result";
import QuestionInput from "./components/QuestionInput";
import "./App.css"; // Assuming you have a global CSS file for styles
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/add-question" element={<QuestionInput />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
