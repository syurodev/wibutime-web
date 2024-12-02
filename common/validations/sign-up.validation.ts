import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(6, { message: "Tên người dùng phải có ít nhất 6 ký tự" }),
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Nhập lại mật khẩu không đúng",
    path: ["confirmPassword"],
  });

export type ISignUpSchema = z.infer<typeof SignUpSchema>;
