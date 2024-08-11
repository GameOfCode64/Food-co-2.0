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

export const form2 = z.object({
  idName: z.string(),
  idImage: z.string(),
});

export const itemsSchema = z.object({
  categoryName: z.string(),
});

export const CreateItemSchema = z.object({
  name: z.string(),
  categoryId: z.string(),
  image: z.string(),
  type: z.string(),
  price: z.string(),
  rating: z.string(),
  description: z.string(),
});

// Profile
export const restaurantProfile = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  location: z.string(),
  rating: z.string(),
  image: z.string(),
  speciality: z.string(),
});
