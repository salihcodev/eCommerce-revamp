import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z.string().min(3).max(50),
    signupEmail: z.string().email(),
    signupPassword: z
      .string()
      .min(10, "password must be atleast 10 character")
      .max(100),
    signupConfirmPassword: z.string().min(10).max(100),
  })
  .refine((data) => data.signupPassword === data.signupConfirmPassword, {
    message: "passwords do not match",
    path: ["signupConfirmPassword"],
  });

export type TSignupSchema = z.infer<typeof signupSchema>;
