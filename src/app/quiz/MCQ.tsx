/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useQuiz from "@/hooks/useQuiz";
import { getQuizSession } from "@/lib/session-storage";
import { Question, QuizSession } from "@/models/Quiz";
import React, { useEffect } from "react";

type Props = {
  questions: any;
  currentQuestionIndex: number;
};

const MCQ = ({ questions, currentQuestionIndex }: Props) => {
  useEffect(() => {}, [currentQuestionIndex]);

  return (
    <div className="flex flex-col mx-4 w-full h-4/5 bg-slate-100 rounded-lg mt-6 shadow-lg">
      <div className="text-2xl font-extrabold m-4">MCQ Quiz</div>
      <div className="text-lg text-center font-bold mt-4">
        {questions[currentQuestionIndex].question}
      </div>
    </div>
  );
};

export default MCQ;
