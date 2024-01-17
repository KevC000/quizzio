import { Question, QuizSession } from "@/models/Quiz";
import React, { useState } from "react";

const useQuiz = () => {
  const [quizSessionState, setQuizSessionState] = useState<
    QuizSession | undefined
  >(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  return {
    quizSessionState,
    setQuizSessionState,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questions,
    setQuestions,
  };
};

export default useQuiz;
