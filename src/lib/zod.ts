import { z } from "zod";

export const getQuestionsSchema = z.object({
  topic: z.string(),
  amount: z.number(),
  type: z.enum(["mcq", "open"]),
});
