import { z } from "zod";

export const contactSchema = z.object({
  firstname: z.string().min(1, "Firstname is required").max(25),
  lastname: z.string().min(1, "Lastname is required").max(25),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid e-mail"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required").max(250),
});

export type ContactSchema = z.infer<typeof contactSchema>;
