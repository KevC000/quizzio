/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";

type Props = {
  topic: string;
  questions: any;
  currentQuestionIndex: number;
};

const MCQ = ({ topic, questions, currentQuestionIndex }: Props) => {
  const currentQuestion = questions[currentQuestionIndex];
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    setOptions([
      currentQuestion.answer,
      currentQuestion.option1,
      currentQuestion.option2,
      currentQuestion.option3,
    ]);
  }, [currentQuestionIndex]);

  return (
    <div className="flex flex-col mx-4 w-full h-4/5 bg-slate-100 rounded-lg mt-6 shadow-lg">
      <div className="text-2xl font-extrabold m-4">
        {`${topic[0].toUpperCase()}${topic.slice(1)}`} Quiz
      </div>
      <div className="text-lg text-center font-bold mt-4">
        {currentQuestion.question}
      </div>
      <div className="text-lg text-center mt-4"></div>
    </div>
  );
};

export default MCQ;
