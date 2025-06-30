import React, { createContext, useReducer } from "react";
import { quizzData } from "./QuizzData";

export const QuizzContext = createContext();

const initialState = {
  questions: quizzData,
  userAnswers: {},
  isSubmitted: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case "ANSWER":
      return {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [action.payload.index]: action.payload.answer,
        },
      };
    case "SUBMIT":
      return {
        ...state,
        isSubmitted: true,
      };
    case "RESET":
      return {
        ...state,
        userAnswers: {},
        isSubmitted: false,
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizzContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizzContext.Provider>
  );
};
