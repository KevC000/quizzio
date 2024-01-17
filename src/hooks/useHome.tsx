import { QuizSession } from "@/models/Quiz";
import React, { useState } from "react";

const useHome = () => {
  const [topic, setTopic] = useState("");
  const [amount, setAmount] = useState(0);
  const [questionType, setQuestionType] = useState<"mcq" | "open">("mcq");
  const [quizSessionState, setQuizSessionState] = useState<
    QuizSession | undefined
  >(undefined);
  return {
    topic,
    setTopic,
    amount,
    setAmount,
    questionType,
    setQuestionType,
    quizSessionState,
    setQuizSessionState,
  };
};

export default useHome;
