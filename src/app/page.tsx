/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useQuizSetup from "@/hooks/useHome";
import { getQuizSession, setQuizSession } from "@/lib/session-storage";
import { Question, QuizSession } from "@/models/Quiz";
import axios from "axios";
import { useEffect, useId, useState } from "react";

const Home = () => {
  const {
    topic,
    setTopic,
    amount,
    setAmount,
    questionType,
    setQuestionType,
    quizSessionState,
    setQuizSessionState,
  } = useQuizSetup();

  type QuestionsPost = {
    amount: number;
    topic: string;
    type: "mcq" | "open";
  };

  useEffect(() => {
    const session = getQuizSession();
    console.log("session", session);
    setQuizSessionState(session);
  }, []);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      // Get questions
      const res = await getQuestions({
        amount,
        topic,
        type: questionType,
      });
      console.log("questions as results", res.questions);

      // Define the quiz session object after questions are fetched
      const quizSession: QuizSession = {
        timeStarted: new Date(),
        timeEnded: undefined,
        topic: topic,
        quizType: questionType,
        questions: res.questions,
      };

      // Set the session in session storage and state only after questions are fetched and quizSession is defined
      setQuizSession(quizSession);
      setQuizSessionState(quizSession);

      // Redirect after setting the session
      if (quizSessionState != undefined) {
        window.location.href = "/quiz";
      }
    } catch (error) {
      console.error("There was an error!", error);
      // Optionally update the state to reflect the error
    }
  };

  const getQuestions = async (data: QuestionsPost): Promise<any> => {
    try {
      console.log("axios data", data);
      const response = await axios.post("/api/questions", data);
      console.log("Raw axios response", response);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        // If the request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data", error.response.data);
        console.error("Error status", error.response.status);
        console.error("Error headers", error.response.headers);
      } else {
        // Something else happened in setting up the request that triggered an error
        console.error("Error message", error.message);
      }
      return [];
    }
  };

  if (quizSessionState != undefined) {
    window.location.href = "/quiz";
  }

  return (
    <div className="flex flex-col mx-4 w-full h-4/5 bg-slate-100 rounded-lg mt-6 shadow-lg">
      <h1 className="text-2xl font-extrabold m-4">Quiz Setup</h1>

      <div className="flex flex-col justify-between h-full items-center">
        <div>
          <label htmlFor="topic" className="mt-1 flex flex-col items-center">
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
            className="mt-1 flex flex-col items-center"
          >
            <h1 className="font-bold text-center text-lg">
              Select number of questions(1-50):
            </h1>
            <br></br>
            <input
              name="questions"
              id="questions"
              type="number"
              className="mx-1 p-2 rounded-md text-center"
              min="3"
              max="50"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </label>
          <br></br>
          <label
            htmlFor="questions"
            className=" mt-1 flex flex-col items-center"
          >
            <h1 className="font-bold text-center text-lg">
              Choose question type:
            </h1>
            <br></br>
            <select
              name="question-type"
              id="question-type"
              value={questionType}
              onChange={(e) =>
                setQuestionType(e.target.value as "mcq" | "open")
              }
              className="m-1 p-2 rounded-md"
            >
              <option value="mcq">Multiple Choice</option>
              <option value="open">Open Ended</option>
            </select>
          </label>
        </div>

        <button
          className="bg-black text-white rounded-lg p-2 mb-6"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
