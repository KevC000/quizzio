import { QuizSession } from "@/models/Quiz";
import { parse } from "path";

export const getQuizSession = () => {
  const value = sessionStorage.getItem("quiz-session");
  const parsedValue = value ? JSON.parse(value) : undefined;
  return parsedValue;
};

export const setQuizSession = (quizSession: QuizSession) => {
  sessionStorage.setItem("quiz-session", JSON.stringify(quizSession));
  console.log("quizSession", quizSession);
};
