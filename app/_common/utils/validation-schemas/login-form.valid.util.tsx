import { z } from "zod";

export const loginSchema = z.object({
  loginEmail: z.string().email(),
  loginPassword: z
    .string()
    .min(10, "password must be atleast 10 character")
    .max(100),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
