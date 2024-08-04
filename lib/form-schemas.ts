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
  phoneNumber: z.string().min(10).max(10),
});

export const UpdateProfile = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
});

// * Restaurant Form Schemas

export const form1 = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
});
