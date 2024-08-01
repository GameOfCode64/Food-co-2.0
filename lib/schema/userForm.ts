import { z } from "zod";

export const SignInformSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const SignUpformSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  Cpassword: z.string(),
  fullName: z.string().max(50),
  phoneNumber: z.number().min(10).max(10),
});
