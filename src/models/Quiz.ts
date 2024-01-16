enum QuizType {
  MCQ = "MCQ",
  OPEN = "OPEN",
}

type QuizSession = {
  id: string;
  timeStarted: Date;
  topic: string;
  timeEnded: Date;
  quizType: QuizType;
  questions: Question[];
};

type Question = {
  id: string;
  quiType: QuizType;
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
  percentageCorrect?: number;
  isCorrect?: boolean;
};
