import { z } from "zod";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "email is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  // used For password and confirmPassword maching
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type signUpType };
