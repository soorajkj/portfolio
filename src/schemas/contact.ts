import { z } from "zod";

export const contactSchema = z.object({
  fullname: z.string().min(1).max(25),
  email: z.string().min(1).email(),
  company: z.string().optional(),
  message: z.string().min(1),
});

export type ContactSchema = z.infer<typeof contactSchema>;
