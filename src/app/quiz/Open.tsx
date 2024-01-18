/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";

type Props = {
  topic: string;
  questions: any;
  currentQuestionIndex: number;
};

const Open = ({ topic, questions, currentQuestionIndex }: Props) => {
  useEffect(() => {}, [currentQuestionIndex]);

  return (
    <div className="flex flex-col mx-4 w-full h-4/5 bg-slate-100 rounded-lg mt-6 shadow-lg">
      <div className="text-2xl font-extrabold m-4">
        {`${topic[0].toUpperCase()}${topic.slice(1)}`} Quiz
      </div>
      <div className="text-lg text-center font-bold mt-4">
        {questions[currentQuestionIndex].question}
      </div>
    </div>
  );
};

export default Open;
