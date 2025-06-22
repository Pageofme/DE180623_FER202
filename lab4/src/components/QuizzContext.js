// QuizzContext.js
import React, { createContext, useState } from "react";
import { quizzData } from "./QuizzData";

export const QuizzContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions] = useState(quizzData);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <QuizzContext.Provider
      value={{
        questions,
        userAnswers,
        setUserAnswers,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};
