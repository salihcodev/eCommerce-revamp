import { z } from "zod";

export const recoverSchema = z.object({
  recoverEmail: z.string().email(),
});

export type TRecoverSchema = z.infer<typeof recoverSchema>;

export const changePasswordSchema = z
  .object({
    recoverPassword: z
      .string()
      .min(10, "password must be atleast 10 character")
      .max(100),
    recoverConfirmPassword: z.string().min(10).max(100),
  })
  .refine((data) => data.recoverPassword === data.recoverConfirmPassword, {
    message: "passwords do not match",
    path: ["recoverConfirmPassword"],
  });

export type TChangePasswordSchemaSchema = z.infer<typeof changePasswordSchema>;
