"use client";
import useQuizSetup from "@/hooks/useQuizSetup";
import React from "react";

type Props = {};

const QuizSetup = (props: Props) => {
  const {
    topic,
    setTopic,
    questions,
    setQuestions,
    questionType,
    setQuestionType,
  } = useQuizSetup();

  return (
    <>
      <h1 className="text-2xl font-extrabold m-4">Quiz Setup</h1>

      <form className="flex flex-col justify-between h-full items-center">
        <div>
          <label htmlFor="topic" className="mt-2 flex flex-col items-center">
            <h1 className="font-bold text-lg text-center">Choose a topic</h1>
            <br></br>
            <input
              name="topic"
              id="topic"
              className="p-2 rounded-md text-center"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
          <br></br>
          <label
            htmlFor="questions"
            className="mt-2 flex flex-col items-center"
          >
            <h1 className="font-bold text-center text-lg">
              Select number of questions(1-50):
            </h1>
            <br></br>
            <input
              name="questions"
              id="questions"
              type="number"
              className="mx-2 p-2 rounded-md text-center"
              min="1"
              max="50"
              value={questions}
              onChange={(e) => setQuestions(parseInt(e.target.value))}
            />
          </label>
          <br></br>
          <label
            htmlFor="questions"
            className=" mt-2 flex flex-col items-center"
          >
            <h1 className="font-bold text-center text-lg">
              Choose question type:
            </h1>
            <br></br>
            <select
              name="question-type"
              id="question-type"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="m-2 p-2 rounded-md"
            >
              <option value="multiple-choice">Multiple Choice</option>
              <option value="open-ended">Open Ended</option>
            </select>
          </label>
        </div>

        <button className="bg-black text-white rounded-lg p-2 mb-6">
          Submit
        </button>
      </form>
    </>
  );
};

export default QuizSetup;
