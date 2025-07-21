import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script",
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these",
      ],
      correctAnswer: "Storing numbers, dates, or other values",
    },
    // thêm các câu hỏi khác...
  ],
  userAnswers: {},
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userAnswers[questionId] = answer;
    },
    resetQuiz: (state) => {
      state.userAnswers = {};
    },
  },
});

export const { selectAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
