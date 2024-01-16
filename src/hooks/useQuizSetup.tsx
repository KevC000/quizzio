import React, { useState } from "react";

const useQuizSetup = () => {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState(0);
  const [questionType, setQuestionType] = useState("multiple-choice"); // default type

  return {
    topic,
    setTopic,
    questions,
    setQuestions,
    questionType,
    setQuestionType,
  };
};

export default useQuizSetup;
