import { z } from "zod";

export type QuizSession = {
  timeStarted: Date;
  timeEnded: Date | undefined;
  quizType: string;
  topic: string;
  questions: Promise<any[]>;
};

export type Question = {
  id: string;
  quizType: "mcq" | "open";
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
  percentageCorrect?: number;
  isCorrect?: boolean;
};
