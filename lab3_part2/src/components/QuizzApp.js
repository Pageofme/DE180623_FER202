import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const QuizzApp = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
    {
      id: 3,
      question: "Who is strongest in Brainrot World?",
      options: [
        "Tung tung tung sahur",
        "Prr Prr Patabim",
        "Tralalero Tralala",
        "Bombadiro Crocodilo",
      ],
      answer: "Tung tung tung sahur",
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setSelectedAnswer(""); // Reset selected answer
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReplay = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div className="text-start">
          <Question
            currentIndex={questions[currentQuestionIndex].id}
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
          />
          <button
            className="btn btn-primary me-2"
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Prev Question
          </button>
          <button className="btn btn-primary" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      ) : (
        <Score
          score={score}
          totalQuestions={questions.length}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
};

export default QuizzApp;
