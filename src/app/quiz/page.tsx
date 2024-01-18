"use client";
import useQuiz from "@/hooks/useQuiz";
import { getQuizSession } from "@/lib/session-storage";
import { QuizSession } from "@/models/Quiz";
import React, { useEffect } from "react";
import MCQ from "./MCQ";
import Open from "./Open";

type Props = {};

const Quiz = (props: Props) => {
  const {
    quizSessionState,
    setQuizSessionState,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questions,
    setQuestions,
  } = useQuiz();

  useEffect(() => {
    const quizSession = getQuizSession();
    console.log("quizSession", quizSession);
    setQuizSessionState(quizSession);
    setQuestions(quizSession.questions);
  }, []);

  return (
    <>
      {quizSessionState !== undefined &&
        (quizSessionState?.quizType === "mcq" ? (
          <MCQ
            topic={quizSessionState.topic}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
          />
        ) : (
          <Open
            topic={quizSessionState.topic}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
          />
        ))}
    </>
  );
};

export default Quiz;
